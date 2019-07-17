<template>
    <default-field :field="field" :errors="errors" :full-width-content="true">
        <template slot="field">
            <div class="rounded-lg">
                <ckeditor
                    :editor="editor"
                    :config="editorConfig"
                    :id="field.name"
                    :class="errorClasses"
                    :placeholder="field.name"
                    v-model="value"
                    @ready="setEditorInitialValue"
                />
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import NovaCKEditor5UploadAdapter from '../ckeditor5/upload-adapter'

export default {
    mixins: [FormField, HandlesValidationErrors],

    components: {
        ckeditor: CKEditor.component
    },

    props: ['resourceName', 'resourceId', 'field'],

    data () {
        // console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ) );
        return {
            editor: ClassicEditor,
            defaultEditorConfig: {
                nova: {
                    resourceName: this.resourceName,
                    field: this.field,
                    draftId: uuidv4()
                },
                language: 'de',
                toolbar: this.field.options.toolbar,
                heading: this.field.options.heading,
                image: this.field.options.image,
                fontFamily: this.field.options.fontFamily,
                extraPlugins: [
                    this.createUploadAdapterPlugin
                ]
            }
        }
    },

    computed: {
        draftId: function () {
            return this.defaultEditorConfig.nova.draftId
        },
        editorConfig: function() {
            let editorConfig = this.defaultEditorConfig

            if (! editorConfig.nova.field.withFiles) {
                editorConfig.removePlugins = [
                    'Image',
                    'ImageToolbar',
                    'ImageCaption',
                    'ImageStyle',
                    'ImageTextAlternate',
                    'ImageUpload'
                ]
                editorConfig.image = {}
                editorConfig.extraPlugins = []
            }

            return editorConfig
        }
    },

    beforeDestroy() {
        this.cleanUp()
    },

    methods: {
        /**
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            //
            console.log(this.field.options);
        },

        /**
         * Set the editor initial, internal value for the field when the editor is ready.
         */
        setEditorInitialValue(editor) {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
            formData.append(this.field.attribute + 'DraftId', this.draftId);
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },

        /**
        * Create CKEditor upload adapter plugin.
        */
        createUploadAdapterPlugin(editor) {
            let novaConfig = editor.config.get('nova')

            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new NovaCKEditor5UploadAdapter(loader, novaConfig.resourceName, novaConfig.field, novaConfig.draftId)
            }
        },

        /**
         * Purge pending attachments for the draft
         */
        cleanUp() {
            if (this.field.withFiles) {
                Nova.request()
                    .delete(
                        `/nova-vendor/ckeditor5-classic/${this.resourceName}/attachments/${this.field.attribute}/${this.draftId}`
                    )
                    .then(response => console.log(response))
                    .catch(error => {})
            }
        }

    }
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    )
}
</script>

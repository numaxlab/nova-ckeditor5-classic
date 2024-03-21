<template>
    <default-field :field="field" :errors="errors" :full-width-content="true">
        <template slot="field">
            <div class="rounded-lg form-control auto-height">
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
        return {
            editor: ClassicEditor,
            defaultEditorConfig: {
                nova: {
                    resourceName: this.resourceName,
                    field: this.field,
                    draftId: uuidv4()
                },
                language: 'en',
                toolbar: this.field.options.toolbar,
                heading: this.field.options.heading,
                image: this.field.options.image,
                fontFamily: this.field.options.fontFamily,
                extraPlugins: [
                    this.createUploadAdapterPlugin
                ],
                link: this.field.options.link,
                mediaEmbed: this.getMediaEmbedConfiguration()
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
        },

        /**
         * Parse mediaEmbed options from the Laravel config.
         */
        getMediaEmbedConfiguration() {
            const mediaEmbedConfig = this.field.options.mediaEmbed;
            if (!mediaEmbedConfig) {
                return {};
            }
            if (mediaEmbedConfig.providers) {
                mediaEmbedConfig.providers = mediaEmbedConfig.providers.map(embed => ({
                    name: embed.name,
                    url: new RegExp(removeRegexDelimiters(embed.url)),
                    html: embed.html
                        ? (match) => replaceMatches(embed.html, match)
                        : undefined
                }));
            }
            if (mediaEmbedConfig.extraProviders) {
                mediaEmbedConfig.extraProviders = mediaEmbedConfig.extraProviders.map(embed => ({
                    name: embed.name,
                    url: new RegExp(removeRegexDelimiters(embed.url)),
                    html: embed.html
                        ? (match) => replaceMatches(embed.html, match)
                        : undefined
                }));
            }
            return mediaEmbedConfig;
        }

    }
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    )
}

/**
 * Remove delimiters from regex coming from the server, since we want to pass
 * this to a RegExp object.
 */
function removeRegexDelimiters(pattern) {
    return pattern.startsWith('/') && pattern.endsWith('/')
        ? pattern.substr(1, pattern.length-2)
        : pattern;
}

/**
 * Replace matches with corresponding placeholders in the given HTML string.
 */
function replaceMatches(string, matches) {
    matches.forEach((match, key) => string = string.replace('$' + key, match));
    return string;
}
</script>


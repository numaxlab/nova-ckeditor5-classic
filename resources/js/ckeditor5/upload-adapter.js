export default class NovaCKEditor5UploadAdapter {
    constructor(loader, resourceName, field, draftId) {
        this.loader = loader
        this.resourceName = resourceName
        this.field = field
        this.draftId = draftId
    }

    upload() {
        return this.loader.file
            .then( file => {
                const data = new FormData()
                data.append('Content-Type', file.type)
                data.append('attachment', file)
                data.append('draftId', this.draftId)

                return Nova.request()
                    .post(`/nova-vendor/ckeditor5-classic/${this.resourceName}/upload/${this.field.attribute}`, data, {
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        if (response.data.uploaded) {
                            return {
                                default: response.data.url
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        return Promise.reject(error)
                    })
            })
    }

    abort() {

    }
}

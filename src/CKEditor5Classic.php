<?php

namespace NumaxLab\NovaCKEditor5Classic;

use Laravel\Nova\Fields\Trix;
use Laravel\Nova\Http\Requests\NovaRequest;
use NumaxLab\NovaCKEditor5Classic\Handlers\DiscardPendingAttachments;
use NumaxLab\NovaCKEditor5Classic\Handlers\StorePendingAttachment;
use NumaxLab\NovaCKEditor5Classic\Models\PendingAttachment;
use NumaxLab\NovaCKEditor5Classic\Models\DeleteAttachments;
use NumaxLab\NovaCKEditor5Classic\Models\DetachAttachment;

class CKEditor5Classic extends Trix
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'ckeditor5-classic-field';

    /**
     * The file storage path.
     *
     * @var string
     */
    public $storagePath = '/attachments';

    public function __construct(string $name, $attribute = null, ?callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);
        $this->withMeta([
            'options' => config('ckeditor5Classic.options', [])
        ]);
    }
    /**
     * Set configuration options for the CKEditor editor instance.
     *
     * @param  array $options
     * @return $this
     */
    public function options($options)
    {
        $currentOptions = $this->meta['options'] ?? [];

        return $this->withMeta([
            'options' => array_merge($currentOptions, $options),
        ]);
    }
    /**
     * @param string|null $disk
     * @return $this
     */
    public function withFiles($disk = null, $path = '/')
    {
        $this->withFiles = true;

        $this->disk($disk);

        $this->attach(new StorePendingAttachment($this))
            ->detach(new DetachAttachment($this))
            ->delete(new DeleteAttachments($this))
            ->discard(new DiscardPendingAttachments())
            ->prunable();

        return $this;
    }

    /**
     * Hydrate the given attribute on the model based on the incoming request.
     *
     * @param  NovaRequest $request
     * @param  string $requestAttribute
     * @param  object $model
     * @param  string $attribute
     * @return \Closure|null
     */
    protected function fillAttribute(NovaRequest $request, $requestAttribute, $model, $attribute)
    {
        parent::fillAttribute($request, $requestAttribute, $model, $attribute);

        if ($request->{$this->attribute.'DraftId'} && $this->withFiles) {
            return function () use ($request, $model, $attribute) {
                config('ckeditor5Classic.pending_attachment_model')::persistDraft(
                    $request->{$this->attribute.'DraftId'},
                    $this,
                    $model
                );
            };
        }
    }
}

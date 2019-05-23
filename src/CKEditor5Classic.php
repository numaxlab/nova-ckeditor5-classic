<?php

namespace NumaxLab\NovaCKEditor5Classic;

use Laravel\Nova\Fields\Trix;
use Laravel\Nova\Http\Requests\NovaRequest;
use NumaxLab\NovaCKEditor5Classic\Handlers\DiscardPendingAttachments;
use NumaxLab\NovaCKEditor5Classic\Handlers\StorePendingAttachment;
use NumaxLab\NovaCKEditor5Classic\Models\PendingAttachment;

class CKEditor5Classic extends Trix
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'ckeditor5-classic-field';

    public function __construct(string $name, $attribute = null, ?callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);
    }

    /**
     * @param null $disk
     * @return $this
     */
    public function withFiles($disk = null)
    {
        $this->withFiles = true;

        $this->disk($disk);

        $this->attach(new StorePendingAttachment($this))
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
                PendingAttachment::persistDraft(
                    $request->{$this->attribute.'DraftId'},
                    $this,
                    $model
                );
            };
        }
    }
}

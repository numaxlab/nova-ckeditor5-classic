<?php

namespace NumaxLab\NovaCKEditor5Classic\Handlers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use NumaxLab\NovaCKEditor5Classic\CKEditor5Classic;
use NumaxLab\NovaCKEditor5Classic\Models\PendingAttachment;

class StorePendingAttachment
{
    /**
     * The field instance.
     *
     * @var CKEditor5Classic
     */
    public $field;

    /**
     * Create a new invokable instance.
     *
     * @param CKEditor5Classic $field
     */
    public function __construct(CKEditor5Classic $field)
    {
        $this->field = $field;
    }

    /**
     * Attach a pending attachment to the field.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    public function __invoke(Request $request)
    {
        $this->abortIfFileNameExists($request);

        $attachment = PendingAttachment::create([
            'draft_id' => $request->draftId,
            'attachment' => $request->attachment->storeAs(
                '/',
                $request->attachment->getClientOriginalName(),
                $this->field->disk
            ),
            'disk' => $this->field->disk,
        ])->attachment;

        return Storage::disk($this->field->disk)->url($attachment);
    }

    /**
     * @param Request $request
     */
    protected function abortIfFileNameExists(Request $request): void
    {
        if (Storage::disk($this->field->disk)->exists($request->attachment->getClientOriginalName())) {
            abort(response()->json([
                'status' => Response::HTTP_CONFLICT,
                'message' => 'A file with this name already exists on the server'
            ], Response::HTTP_CONFLICT));
        }
    }
}

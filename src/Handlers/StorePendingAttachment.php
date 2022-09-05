<?php

namespace NumaxLab\NovaCKEditor5Classic\Handlers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use NumaxLab\NovaCKEditor5Classic\CKEditor5Classic;
use NumaxLab\NovaCKEditor5Classic\Models\PendingAttachment;

class StorePendingAttachment
{
    public const STORAGE_PATH = '/attachments';

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
        $filename = $this->generateFilename($request->attachment);

        $this->abortIfFileNameExists($filename);

        $attachment = config('ckeditor5Classic.pending_attachment_model')::create([
            'draft_id' => $request->draftId,
            'attachment' => $request->attachment->storeAs(
                self::STORAGE_PATH,
                $filename,
                $this->field->disk
            ),
            'disk' => $this->field->disk,
        ])->attachment;

        return Storage::disk($this->field->disk)->url($attachment);
    }

    /**
     * @param string $filename
     */
    protected function abortIfFileNameExists($filename): void
    {
        if (Storage::disk($this->field->disk)->exists(self::STORAGE_PATH.'/'.$filename)) {
            abort(response()->json([
                'status' => Response::HTTP_CONFLICT,
                'message' => 'A file with this name already exists on the server'
            ], Response::HTTP_CONFLICT));
        }
    }

    /**
     * @param UploadedFile $uploadedFile
     * @return string
     */
    protected function generateFilename(UploadedFile $uploadedFile)
    {
        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);

        return Str::slug($originalFilename).'-'.uniqid('', false).'.'.$uploadedFile->guessExtension();
    }
}

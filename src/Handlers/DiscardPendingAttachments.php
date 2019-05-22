<?php

namespace NumaxLab\NovaCKEditor5Classic\Handlers;

use Illuminate\Http\Request;
use NumaxLab\NovaCKEditor5Classic\Models\PendingAttachment;

class DiscardPendingAttachments
{
    /**
     * Discard pendings attachments on the field.
     *
     * @param  Request $request
     * @return void
     */
    public function __invoke(Request $request)
    {
        PendingAttachment::where('draft_id', $request->draftId)
            ->get()
            ->each
            ->purge();
    }
}

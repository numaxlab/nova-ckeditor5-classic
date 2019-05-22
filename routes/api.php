<?php

use Illuminate\Support\Facades\Route;
use NumaxLab\NovaCKEditor5Classic\Http\Controllers\UploadController;

Route::post('{resource}/upload/{field}', UploadController::class.'@store');
Route::delete('{resource}/attachments/{field}/{draftId}', UploadController::class.'@destroyPending');

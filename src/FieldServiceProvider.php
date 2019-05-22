<?php

namespace NumaxLab\NovaCKEditor5Classic;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script('ckeditor5-classic-field', __DIR__.'/../dist/js/field.js');
            Nova::style('ckeditor5-classic-field', __DIR__.'/../dist/css/field.css');
        });

        if (! class_exists('CreateCKEditorAttachmentTables')) {
            $timestamp = date('Y_m_d_His', time());

            $this->publishes([
                __DIR__.'/../database/migrations/create_ckeditor_attachment_tables.php.stub' => database_path('migrations/'.$timestamp.'_create_ckeditor_attachment_tables.php'),
            ], 'migrations');
        }
    }

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
            ->prefix('nova-vendor/ckeditor5-classic')
            ->group(__DIR__.'/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

## Introduction

[CKEditor5 Classic editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor) field for Laravel Nova. Use the last version of the popular WYSIWYG editor as a [Laravel Nova](https://nova.laravel.com/) field.

<a href="https://packagist.org/packages/numaxlab/nova-ckeditor5-classic"><img src="https://img.shields.io/packagist/v/numaxlab/nova-ckeditor5-classic.svg?style=flat-square" alt="Latest Version on Packagist"></img></a>
<a href="https://packagist.org/packages/numaxlab/nova-ckeditor5-classic"><img src="https://img.shields.io/packagist/dt/numaxlab/nova-ckeditor5-classic.svg?style=flat-square" alt="Total Downloads"></a>

## Installation

You can install the package into a Laravel application that uses Nova via composer:

```bash
composer require numaxlab/nova-ckeditor5-classic
```

After installing publish the config:

```bash
php artisan vendor:publish --tag=config --provider=NumaxLab\\NovaCKEditor5Classic\\FieldServiceProvider
```

## Usage

Use the `NumaxLab\NovaCKEditor5Classic\CKEditor5Classic` field in your Nova resource:


```php
namespace App\Nova;

use NumaxLab\NovaCKEditor5Classic\CKEditor5Classic;

class Post extends Resource
{
    // ...

    public function fields(Request $request)
    {
        return [
            // ...

            CKEditor5Classic::make('Content'),

            // ...
        ];
    }
}
```

## Customizing CKEditor

If you want to change the Editor's settings, you can do so by editing the config file 
`config/ckeditor5Classic.php` or by setting it directly in your filed, if you need different setup per field:

```
CKEditor5Classic::make('Content')->withFiles('public')
->options([...]);
```

You can visit the CKEditor [configuration reference](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) to check the available options.

## Image uploads

This Nova field provides native attachments driver which works similar to [Trix File Uploads](https://nova.laravel.com/docs/1.0/resources/fields.html#file-uploads).

To use this attachments driver, publish and run the migration:

```bash
php artisan vendor:publish --tag=migrations --provider=NumaxLab\\NovaCKEditor5Classic\\\FieldServiceProvider 
php artisan migrate
```

Then, allow users to upload images, just like with Trix field, chaining the `withFiles` method onto the field's definition. When calling this method, you should pass the name of the filesystem disk that images should be stored on:

```php
use NumaxLab\NovaCKEditor5Classic\CKEditor5Classic;

CKEditor5Classic::make('Content')->withFiles('public');
```

And also, in your `app/Console/Kernel.php` file, you should register a [daily job](https://laravel.com/docs/5.7/scheduling) to prune any stale attachments from the pending attachments table and storage:

```php
use NumaxLab\NovaCKEditor5Classic\Jobs\PruneStaleAttachments;

/**
* Define the application's command schedule.
*
* @param  \Illuminate\Console\Scheduling\Schedule  $schedule
* @return void
*/
protected function schedule(Schedule $schedule)
{
    $schedule->call(function () {
        (new PruneStaleAttachments)();
    })->daily();
}
```

## Credits

- [Adrian P. Blunier](https://github.com/ablunier)


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

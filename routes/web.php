<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\Users\DeleteUserController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard',[
            'users' => User::all(),
        ]);
    })->name('dashboard');
});
Route::delete('/users/{id}', [DeleteUserController::class, 'destroy']);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

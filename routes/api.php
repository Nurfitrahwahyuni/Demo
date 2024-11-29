<?php
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route untuk user (sebagai contoh jika autentikasi menggunakan Sanctum)
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(Authenticate::using('sanctum'));

// Route untuk Posts
Route::apiResource('/posts', App\Http\Controllers\Api\PostController::class);

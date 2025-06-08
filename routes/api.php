<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'admin'])
    ->group(function () {
        Route::get('/user', [AuthController::class, 'getUser'])
            ->name('user'); // Endpoint to get the authenticated user details
        Route::post('/logout', [AuthController::class, 'logout'])
            ->name('logout');

        });
        
        Route::post('/login', [AuthController::class, 'login']);
        Route::get('/products', [ProductController::class, 'index'])
        ->name('products'); // Endpoint to get the list of all products


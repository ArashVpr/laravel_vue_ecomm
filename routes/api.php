<?php

use App\Http\Controllers\AuthController;
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


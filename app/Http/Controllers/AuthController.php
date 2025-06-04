<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(Request $request)
    {
        // Validate the request data
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
            'remember' => ['boolean'], // field for remember me functionality
        ]);

        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'message' => 'Email or password in incorrect.'
            ], 422);
        }

        $user = Auth::user();

        if ($user->role !== 'admin') {
            Auth::logout();

            return response([
                'message' => 'You are not authorized to access this resource.'
            ], 403);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token,
        ], 200);

        // Authentication failed
        return response(['success' => 'Aauthorized'], 200);
    }

    public function logout()
    {
        // Revoke the user's token
        $user = Auth::user();
        $user->tokens()->delete();

        return response(['message' => 'Logged out successfully'], 204);
    }
}

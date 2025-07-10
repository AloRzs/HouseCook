<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function create()
    {
        return Inertia::render('auth/login');
    }
    public function show(User $user): View
    {
    }
}

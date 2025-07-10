<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/userpage', function (){
    return Inertia::render('auth/login');
})->name('user.page');

<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/','Home');

Route::get('/categories', function () {
    return inertia('categories/Categories');
});

Route::get('/products', function () {
    return inertia('products/Products');
});

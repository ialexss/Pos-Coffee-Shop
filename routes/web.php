<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CategoriesController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/profile', function () {
        return Inertia::render('Profile/Edit');
    })->name('profile.edit');
    
    Route::get('/order', [OrdersController::class, 'create'])->name('orders.create');

    Route::get('/orders', [OrdersController::class, 'index'])->name('orders.index');
    Route::get('/orders/create', [OrdersController::class, 'create'])->name('orders.create');
    Route::post('/orders', [OrdersController::class, 'store'])->name('orders.store');
    Route::get('/orders/{id}', [OrdersController::class, 'show'])->name('orders.show');
    Route::get('/orders/{id}/edit', [OrdersController::class, 'edit'])->name('orders.edit');
    Route::put('/orders/{id}', [OrdersController::class, 'update'])->name('orders.update');
    Route::delete('/orders/{id}', [OrdersController::class, 'destroy'])->name('orders.destroy');

    Route::get('/category', [CategoriesController::class, 'create'])->name('category.create');

    Route::get('/product', [ProductsController::class, 'create'])->name('product.create');
});
require __DIR__.'/auth.php';
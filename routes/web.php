<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\LogoController;
use App\Http\Controllers\EnterpriseController;

// Ruta para actualizar los detalles de la empresa
Route::post('/update-cafe-details', [EnterpriseController::class, 'update']);

// Ruta para obtener los detalles de la empresa
Route::get('/get-cafe-details', [EnterpriseController::class, 'getDetails']);


Route::post('/upload-logo', [LogoController::class, 'upload']);

// Rutas de productos

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('order/Order');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::prefix('products')->name('products.')->group(function () {
        Route::get('/', [ProductsController::class, 'index'])->name('index');
        Route::get('/create', [ProductsController::class, 'create'])->name('create');
        Route::post('/', [ProductsController::class, 'store'])->name('store');
        Route::get('/{id}', [ProductsController::class, 'show'])->name('show');
        Route::get('/{id}/edit', [ProductsController::class, 'edit'])->name('edit');
        Route::put('/{id}', [ProductsController::class, 'update'])->name('update');
        Route::delete('/{id}', [ProductsController::class, 'destroy'])->name('destroy');
    });
    
    // Ruta para mostrar todas las categorías
    Route::get('/categories', [CategoriesController::class, 'index'])->name('categories.index');
    
    // Ruta para mostrar el formulario de creación de una nueva categoría
    Route::get('/categories/create', [CategoriesController::class, 'create'])->name('categories.create');
    
    // Ruta para almacenar una nueva categoría
    Route::post('/categories', [CategoriesController::class, 'store'])->name('categories.store');
    
    // Ruta para mostrar una categoría específica
    Route::get('/categories/{id}', [CategoriesController::class, 'show'])->name('categories.show');
    
    // Ruta para mostrar el formulario de edición de una categoría
    Route::get('/categories/{id}/edit', [CategoriesController::class, 'edit'])->name('categories.edit');
    
    // Ruta para actualizar una categoría existente
    Route::put('/categories/{id}', [CategoriesController::class, 'update'])->name('categories.update');
    
    // Ruta para eliminar una categoría
    Route::delete('/categories/{id}', [CategoriesController::class, 'destroy'])->name('categories.destroy');
    
    
    // Reportes de orden
    Route::get('/order/report', [OrdersController::class, 'reportByDate'])->name('report');
    // Ruta para crear una orden

    // Rutas para órdenes
    Route::get('/orders', [OrdersController::class, 'index'])->name('orders.index');
    Route::get('/orders/create', [OrdersController::class, 'create'])->name('orders.create');
    Route::post('/orders', [OrdersController::class, 'store'])->name('orders.store');
    Route::get('/orders/ticket/{order}', [OrdersController::class, 'showTicket'])->name('orders.ticket');
    Route::get('/orders/{id}', [OrdersController::class, 'show'])->name('orders.show');
    Route::get('/orders/{id}/edit', [OrdersController::class, 'edit'])->name('orders.edit');
    Route::put('/orders/{id}', [OrdersController::class, 'update'])->name('orders.update');
    Route::delete('/orders/{id}', [OrdersController::class, 'destroy'])->name('orders.destroy');
    
    Route::get('/order', [OrdersController::class, 'create'])->name('orders.create');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

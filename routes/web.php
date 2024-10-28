<?php

use Illuminate\Support\Facades\Route;
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

Route::inertia('/','Home');

// Ruta para mostrar todos los productos
Route::get('/products', [ProductsController::class, 'index'])->name('products.index');

// Ruta para mostrar el formulario de creación de un nuevo producto
Route::get('/products/create', [ProductsController::class, 'create'])->name('products.create');

// Ruta para almacenar un nuevo producto
Route::post('/products', [ProductsController::class, 'store'])->name('products.store');

// Ruta para mostrar un producto específico
Route::get('/products/{id}', [ProductsController::class, 'show'])->name('products.show');

// Ruta para mostrar el formulario de edición de un producto
Route::get('/products/{id}/edit', [ProductsController::class, 'edit'])->name('products.edit');

// Ruta para actualizar un producto existente
Route::put('/products/{id}', [ProductsController::class, 'update'])->name('products.update');

// Ruta para eliminar un producto
Route::delete('/products/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');


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


// Ruta para crear una orden
Route::get('/order', [OrdersController::class, 'create'])->name('orders.create');
// Rutas para órdenes
Route::get('/orders', [OrdersController::class, 'index'])->name('orders.index');
Route::get('/orders/create', [OrdersController::class, 'create'])->name('orders.create');
Route::post('/orders', [OrdersController::class, 'store'])->name('orders.store');
Route::get('/orders/ticket/{order}', [OrdersController::class, 'showTicket'])->name('orders.ticket');
Route::get('/orders/{id}', [OrdersController::class, 'show'])->name('orders.show');
Route::get('/orders/{id}/edit', [OrdersController::class, 'edit'])->name('orders.edit');
Route::put('/orders/{id}', [OrdersController::class, 'update'])->name('orders.update');
Route::delete('/orders/{id}', [OrdersController::class, 'destroy'])->name('orders.destroy');



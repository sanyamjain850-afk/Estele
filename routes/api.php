<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\ChatController;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/categories',[CategoryController::class,'index']);
Route::post('/admin/orders',[AdminController::class, 'orders']);
Route::post('/chat',[ChatController::class,'send']);
Route::get('/orders', [OrderController::class, 'index']);
Route::post('/orders/my-orders', [OrderController::class, 'myOrders']);
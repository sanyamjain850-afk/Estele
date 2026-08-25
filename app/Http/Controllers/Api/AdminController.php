<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function orders(Request $request)
    {
        $request->validate(['password' => 'required|string']);

        if ($request->password !== env('ADMIN_PASSWORD')) {
            return response()->json(['message' => 'Wrong password'], 401);
        }

        $orders = Order::with('items')->orderBy('created_at', 'desc')->get();

        return response()->json($orders);
    }
}
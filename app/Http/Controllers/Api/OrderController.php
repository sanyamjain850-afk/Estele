<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'nullable|email',
            'address' => 'required|string',
            'city' => 'required|string',
            'pincode' => 'required|string',
            'items' => 'required|array|min:1',
            'items.*.id' => 'required',
            'items.*.name' => 'nullable|string',
            'items.*.qty' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric',
            'total' => 'required|numeric',
        ]);

        $order = Order::create([
            'user_id' => $request->user()?->id,
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'email' => $validated['email'] ?? null,
            'address' => $validated['address'],
            'city' => $validated['city'],
            'pincode' => $validated['pincode'],
            'total' => $validated['total'],
            'status' => 'placed',
        ]);

        foreach ($validated['items'] as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'product_name' => $item['name'] ?? "Product #{$item['id']}",
                'qty' => $item['qty'],
                'price' => $item['price'] ?? 0,
            ]);
        }

        return response()->json($order->load('items'), 201);
    }
   public function myOrders(Request $request)
{
    $request->validate(['phone' => 'required|string']);
    return Order::with('items')
        ->where('phone', $request->phone)
        ->latest()
        ->get();
}
}
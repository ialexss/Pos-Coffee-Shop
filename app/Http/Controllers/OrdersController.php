<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use Inertia\Inertia;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with(['typePayment', 'status'])->get();
        return Inertia::render('orders/Orders', [
            'orders' => $orders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $products = Product::with('category')->get(); // Obtén la lista de productos
        return Inertia::render('order/Order', [
            'products' => $products, // Envía los productos a la vista
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'client_name' => 'required|string|max:255',
            'subtotal' => 'required|numeric',
            'type_payment_id' => 'required|exists:type_payments,id',
            'status_id' => 'required|exists:status,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $order = Order::create($request->all());

        return redirect()->route('orders.index')->with('success', 'Order created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::with(['typePayment', 'status'])->findOrFail($id);
        return Inertia::render('orders/OrderDetail', [
            'order' => $order,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $order = Order::with(['typePayment', 'status'])->findOrFail($id);
        return Inertia::render('orders/EditOrder', [
            'order' => $order,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::findOrFail($id);

        $request->validate([
            'client_name' => 'sometimes|required|string|max:255',
            'subtotal' => 'sometimes|required|numeric',
            'type_payment_id' => 'sometimes|required|exists:type_payments,id',
            'status_id' => 'sometimes|required|exists:status,id',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        $order->update($request->all());

        return redirect()->route('orders.index')->with('success', 'Order updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return redirect()->route('orders.index')->with('success', 'Order deleted successfully');
    }
}

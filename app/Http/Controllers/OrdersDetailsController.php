<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderDetail;

class OrdersDetailsController extends Controller
{
/**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orderDetails = OrderDetail::with(['order', 'product'])->get();
        return response()->json($orderDetails);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Este método puede estar vacío si se utiliza un frontend separado.
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'order_id' => 'required|exists:orders,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'price' => 'required|numeric',
        ]);

        $orderDetail = OrderDetail::create($request->all());
        return response()->json($orderDetail, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $orderDetail = OrderDetail::with(['order', 'product'])->findOrFail($id);
        return response()->json($orderDetail);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Este método puede estar vacío si se utiliza un frontend separado.
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $orderDetail = OrderDetail::findOrFail($id);

        $request->validate([
            'order_id' => 'sometimes|required|exists:orders,id',
            'product_id' => 'sometimes|required|exists:products,id',
            'quantity' => 'sometimes|required|integer|min:1',
            'price' => 'sometimes|required|numeric',
        ]);

        $orderDetail->update($request->all());
        return response()->json($orderDetail);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $orderDetail = OrderDetail::findOrFail($id);
        $orderDetail->delete();
        return response()->json(null, 204);
    }
}

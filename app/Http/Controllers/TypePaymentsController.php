<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypePayment;


class TypePaymentsController extends Controller
{
/**
     * Display a listing of the resource.
     */
    public function index()
    {
        $typePayments = TypePayment::all();
        return response()->json($typePayments);
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
            'name' => 'required|string|max:255',
        ]);

        $typePayment = TypePayment::create($request->all());
        return response()->json($typePayment, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $typePayment = TypePayment::findOrFail($id);
        return response()->json($typePayment);
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
        $typePayment = TypePayment::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
        ]);

        $typePayment->update($request->all());
        return response()->json($typePayment);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $typePayment = TypePayment::findOrFail($id);
        $typePayment->delete();
        return response()->json(null, 204);
    }
}

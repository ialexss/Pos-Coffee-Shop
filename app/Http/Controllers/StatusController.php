<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Status;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statuses = Status::all();
        return response()->json($statuses);
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
            'status' => 'required|string|max:255',
        ]);

        $status = Status::create($request->all());
        return response()->json($status, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $status = Status::findOrFail($id);
        return response()->json($status);
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
        $status = Status::findOrFail($id);

        $request->validate([
            'status' => 'sometimes|required|string|max:255',
        ]);

        $status->update($request->all());
        return response()->json($status);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $status = Status::findOrFail($id);
        $status->delete();
        return response()->json(null, 204);
    }
}

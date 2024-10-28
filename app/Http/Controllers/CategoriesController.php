<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all(); // Obtén todas las categorías
        return Inertia::render('categories/Categories', [
            'categories' => $categories, // Envía las categorías a la vista
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all(); // Obtén todas las categorías
        return Inertia::render('categories/Categories', [
            'categories' => $categories, // Envía las categorías a la vista
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);
    
        Category::create($request->all());
    
        return redirect()->route('categories.index')->with('message', 'Categoría creada con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Similar al método create, este se puede dejar vacío o manejarse de otra manera.
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);
    
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
        ]);
    
        $category->update($request->all());
    
        return redirect()->route('categories.index')->with('message', 'Categoría actualizada con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
    
        return redirect()->route('categories.index')->with('message', 'Categoría eliminada con éxito.');
    }

}

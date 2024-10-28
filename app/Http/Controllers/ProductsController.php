<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use App\Models\Category; // Asegúrate de incluir el modelo de categoría

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  
     public function index()
     {
         $products = Product::with('category')->get(); // Obtener productos con categoría
         $categories = Category::all(); // Obtener todas las categorías
 
         return Inertia::render('products/Products', [
             'products' => $products,
             'categories' => $categories, // Enviar las categorías a la vista
         ]);
     }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Este método puede ser usado para retornar un formulario de creación.
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'picture' => 'required|image|max:2048', // Updated to handle file uploads
            'category_id' => 'required|exists:categories,id'
        ], [
            'name.required' => 'El nombre del producto es obligatorio.',
            'price.required' => 'El precio es necesario.',
            'category_id.exists' => 'La categoría seleccionada no es válida.',
            'picture.image' => 'La imagen debe ser un archivo de imagen.',
            'picture.max' => 'La imagen no debe exceder los 2MB.'
        ]);
        
        // Store the uploaded picture
        $path = $request->file('picture')->store('products', 'public'); // Store in 'public/products' directory
    
        // Create the product with the image path
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'picture' => $path, // Store the path of the uploaded image
            'category_id' => $request->category_id,
        ]);
    
        return redirect()->route('products.index')->with('success', 'Product created successfully');
    }
    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::with('category')->findOrFail($id);
        return Inertia::render('products/ProductDetail', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::with('category')->findOrFail($id);
        return Inertia::render('products/EditProduct', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'picture' => 'nullable|image|max:2048', // Make it optional for updates
            'category_id' => 'required|exists:categories,id'
        ]);
    
        $product = Product::findOrFail($id);
    
        // Handle the picture upload
        if ($request->hasFile('picture')) {
            // Delete the old picture if necessary (optional)
            // Storage::delete($product->picture);
    
            // Store the new picture
            $path = $request->file('picture')->store('products', 'public');
            $product->picture = $path; // Update the picture path
        }
    
        // Update other fields
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
    
        $product->save(); // Save the changes
    
        return redirect()->route('products.index')->with('success', 'Product updated successfully');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
{
    try {
        $product = Product::findOrFail($id);
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Product deleted successfully');
    } catch (\Exception $e) {
        return redirect()->route('products.index')->with('error', 'Error al eliminar el producto');
    }
}

}

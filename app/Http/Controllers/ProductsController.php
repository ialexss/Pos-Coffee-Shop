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
            'picture' => 'required|image|max:2048', // Validación para archivo de imagen
            'category_id' => 'required|exists:categories,id'
        ], [
            'name.required' => 'El nombre del producto es obligatorio.',
            'price.required' => 'El precio es necesario.',
            'category_id.exists' => 'La categoría seleccionada no es válida.',
            'picture.image' => 'La imagen debe ser un archivo de imagen.',
            'picture.max' => 'La imagen no debe exceder los 2MB.'
        ]);
    
        // Almacenar la imagen y obtener el nombre del archivo
        $filename = $request->name . '.jpg';
        $request->file('picture')->move(public_path('images/products'), $filename);
    
        // Crear el producto con la ruta relativa de la imagen
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'picture' => 'images/products/' . $filename, // Ruta relativa
            'category_id' => $request->category_id,
        ]);
    
        return redirect()->route('products.index')->with('success', 'Producto creado exitosamente');
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
            'category_id' => 'required|exists:categories,id'
        ]);
    
        $product = Product::findOrFail($id);
    
        // Manejar la carga de la nueva imagen si existe
        if ($request->hasFile('picture')) {
            // Eliminar la imagen anterior si existe
            if ($product->picture && file_exists(public_path($product->picture))) {
                unlink(public_path($product->picture));
            }
    
            // Guardar la nueva imagen y actualizar la ruta relativa
            $filename = $request->name . '.jpg';
            $request->file('picture')->move(public_path('images/products'), $filename);
            $product->picture = 'images/products/' . $filename; // Ruta relativa
        }
    
        // Actualizar otros campos
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
    
        $product->save(); // Guardar los cambios
    
        return redirect()->route('products.index')->with('success', 'Producto actualizado exitosamente');
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

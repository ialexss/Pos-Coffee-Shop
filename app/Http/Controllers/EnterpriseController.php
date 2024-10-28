<?php

namespace App\Http\Controllers;

use App\Models\Enterprise; // Asegúrate de importar el modelo
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EnterpriseController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'image|mimes:jpeg,png,jpg|max:2048', // Validación para el logo
        ]);
    
        $enterprise = Enterprise::latest()->first(); // Obtener el último registro
    
        if ($enterprise) {
            // Si hay un logo nuevo, actualizar la ruta
            if ($request->hasFile('logo')) {
                $path = 'images/logo/logo.jpg';
                $request->file('logo')->move(public_path('images/logo'), 'logo.jpg');
                $enterprise->logo = $path; // Actualiza la ruta del logo
            }
    
            $enterprise->name = $request->input('name'); // Actualiza el nombre
            $enterprise->save(); // Guarda los cambios
    
            return response()->json([
                'success' => 'Detalles de la cafetería actualizados correctamente.',
                'cafeDetails' => $enterprise 
            ]);
        } else {
            return response()->json(['message' => 'Cafetería no encontrada'], 404);
        }
    }    

    public function getDetails()
    {
        $enterprise = Enterprise::latest()->first(); // Obtener el último registro
        return response()->json($enterprise);
    }
}

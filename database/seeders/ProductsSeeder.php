<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'name' => 'Espresso', 
                'description' => 'Café fuerte y concentrado.',
                'price' => 2.50,
                'picture' => 'public\images\products\espresso.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Latte', 
                'description' => 'Café con leche espumosa y suave.',
                'price' => 3.00,
                'picture' => 'images/products/latte.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Cappuccino', 
                'description' => 'Café con espuma de leche y un toque de canela.',
                'price' => 3.20,
                'picture' => 'images/products/cappuccino.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Mocca', 
                'description' => 'Café con chocolate y leche espumosa.',
                'price' => 3.50,
                'picture' => 'images/products/mocca.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Café con leche', 
                'description' => 'Café clásico con leche caliente.',
                'price' => 2.80,
                'picture' => 'images/products/cafe_con_leche.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Café irlandés', 
                'description' => 'Café con whisky y crema.',
                'price' => 4.50,
                'picture' => 'images/products/cafe_irlandes.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Americano', 
                'description' => 'Café diluido con agua para un sabor más suave.',
                'price' => 2.20,
                'picture' => 'images/products/americano.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Macchiato', 
                'description' => 'Espresso con un toque de espuma de leche.',
                'price' => 3.10,
                'picture' => 'images/products/macchiato.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Vainilla Latte', 
                'description' => 'Latte con un toque de vainilla.',
                'price' => 3.40,
                'picture' => 'images/products/vainilla_latte.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Muffin', 
                'description' => 'Delicioso muffin ideal para acompañar el café.',
                'price' => 1.80,
                'picture' => 'images/products/muffin.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Sandwich Jamon y Queso', 
                'description' => 'Sándwich clásico de jamón y queso.',
                'price' => 2.50,
                'picture' => 'images/products/sandwich_jamon_queso.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Sandwich Pollo', 
                'description' => 'Sándwich con pollo a la plancha y vegetales.',
                'price' => 3.00,
                'picture' => 'images/products/sandwich_pollo.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Tostadas', 
                'description' => 'Tostadas de pan acompañadas con mermelada o mantequilla.',
                'price' => 1.20,
                'picture' => 'images/products/tostadas.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Panini', 
                'description' => 'Panini italiano relleno de queso y vegetales.',
                'price' => 3.30,
                'picture' => 'images/products/panini.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Cuñape', 
                'description' => 'Delicioso cuñape de queso.',
                'price' => 1.50,
                'picture' => 'images/products/cunape.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Rosca de Maiz', 
                'description' => 'Rosca tradicional de maíz.',
                'price' => 1.70,
                'picture' => 'images/products/rosca_maiz.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Empanada de Queso', 
                'description' => 'Empanada rellena de queso.',
                'price' => 1.90,
                'picture' => 'images/products/empanada_queso.jpg',
                'category_id' => 2
            ],
            [
                'name' => 'Empanada de Carne', 
                'description' => 'Empanada rellena de carne sazonada.',
                'price' => 2.00,
                'picture' => 'images/products/empanada_carne.jpg',
                'category_id' => 2
            ],
        ];

        DB::table('products')->insert($products);
    }
}

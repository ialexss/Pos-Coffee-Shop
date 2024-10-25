<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        $categories = [
            ['name' => 'Café','description' => 'Bebidas calientes'],
            ['name' => 'Snacks','description' => 'Bocadillos']
        ];

        DB::table('categories')->insert($categories);
    }
}

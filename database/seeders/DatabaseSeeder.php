<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Juan',
            'first_lastname' => 'Perez',
            'second_lastname' => 'Gonzalez',
            'phone' => '123456789',
            'birthday' => '2000-01-01', 
            'rol' => 'Cajero',
            'email' => 'juan@gmail.com',
            'password' => '123456' // Encriptación de la contraseña => bcrypt('123456')
        ]);

        User::factory()->create([
            'name' => 'Maria',
            'first_lastname' => 'Lopez',
            'second_lastname' => 'Martinez',
            'phone' => '123456789',
            'birthday' => '2001-06-01',
            'rol' => 'Despachadora',
            'email' => 'maria@gmail.com',
            'password' => '123456' // Encriptación de la contraseña => bcrypt('123456')
        ]);

        User::factory()->create([
            'name' => 'user',
            'first_lastname' => 'lastname',
            'second_lastname' => 'lastname',
            'phone' => '123456789',
            'birthday' => '2000-01-01', 
            'rol' => 'Cajero',
            'email' => 'admin@coffeeshop.com',
            'password' => 'admin' // Encriptación de la contraseña => bcrypt('admin')
        ]);

        // Llama a los seeders individuales
        $this->call([
            TypePaymentsSeeder::class,
            StatusSeeder::class,
            CategoriesSeeder::class,
            ProductsSeeder::class,
            EnterprisesSeeder::class,
        ]);
    }
}


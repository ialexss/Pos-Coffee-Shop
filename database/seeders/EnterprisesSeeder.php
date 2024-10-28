<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnterprisesSeeder extends Seeder
{
    public function run()
    {
        $enterprises = [
            [
                'name' => 'Coffee Shop', 
                'logo' => 'images/logo/logo.jpg',
            ],
        ];

        DB::table('enterprises')->insert($enterprises);
    }
}

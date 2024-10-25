<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    public function run()
    {
        $status = [
            ['id' => 1, 'status' => 'Pendiente'],
            ['id' => 2, 'status' => 'Pagado'],
            ['id' => 3, 'status' => 'Entregado'],
        ];

        DB::table('status')->insert($status);
    }
}

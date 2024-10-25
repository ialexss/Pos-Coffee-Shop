<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypePaymentsSeeder extends Seeder
{
    public function run()
    {
        $typePayments = [
            ['id' => 1, 'name' => 'Efectivo'],
            ['id' => 2, 'name' => 'Tarjeta'],
            ['id' => 3, 'name' => 'QR'],
        ];

        DB::table('type_payments')->insert($typePayments);
    }
}

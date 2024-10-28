<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrderDetail extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity', // Agregar quantity aquí para poder asignarlo masivamente
    ];

    // Relación con Order (muchos a uno)
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // Relación con Product (muchos a uno)
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
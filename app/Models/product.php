<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'price',
        'picture',
        'category_id'
    ];

    // Relación con Category (muchos a uno)
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Relación con OrderDetail (uno a muchos)
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}

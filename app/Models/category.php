<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class category extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description'
    ];

    // Relación con Product (uno a muchos)
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}

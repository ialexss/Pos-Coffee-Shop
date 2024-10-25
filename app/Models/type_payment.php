<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class type_payment extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name'
    ];

    // Relación con Order (uno a muchos)
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

}

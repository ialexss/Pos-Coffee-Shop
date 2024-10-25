<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class status extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'status'
    ];

    // Relación con Order (uno a muchos)
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

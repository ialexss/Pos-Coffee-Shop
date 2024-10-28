<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class order extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'client_name',
        'subtotal',
        'type_payment_id',
        'status_id',
        'user_id'
    ];

    // Relación con OrderDetail (uno a muchos)
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    // Relación con TypePayment (muchos a uno)
    public function typePayment()
    {
        return $this->belongsTo(TypePayment::class);
    }

    // Relación con Status (muchos a uno)
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    // Relación con User (muchos a uno)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Define the relationship
    public function details()
    {
        return $this->hasMany(OrderDetail::class); // Adjust the class name if needed
    }
}

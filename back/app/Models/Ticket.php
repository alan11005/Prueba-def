<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'showing_id',
        'seat',
        'price'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function showing(): HasOne
    {
        return $this->hasOne(Showing::class, 'id', 'showing_id');
    }
}

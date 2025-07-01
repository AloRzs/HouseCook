<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class UserRole extends Model
{
    /** @use HasFactory<\Database\Factories\UserRoleFactory> */
    use HasFactory;
    protected $table = "UserRole"

    protected function getRole(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucfirst($value)
        )
    }
}

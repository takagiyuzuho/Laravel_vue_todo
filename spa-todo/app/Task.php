<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name', 'is_done'];

    protected  $cats = [
      'is_done' => 'boolean',
    ];
}
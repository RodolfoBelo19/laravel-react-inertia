<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class HomeReactController extends Controller
{
    public function index() {
      $example = 'test prop of the controller laravel';

      return Inertia::render('Home', [
        'props' => $example
      ]);
    }
}

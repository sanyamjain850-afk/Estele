<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Necklaces', 'slug' => 'necklaces'],
            ['name' => 'Earrings', 'slug' => 'earrings'],
            ['name' => 'Rings', 'slug' => 'rings'],
            ['name' => 'Bracelets', 'slug' => 'bracelets'],
        ];

        foreach ($categories as $cat) {
            Category::create($cat);
        }
    }
}
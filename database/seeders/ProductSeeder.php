<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $necklace = Category::where('slug', 'necklaces')->first();
        $earrings = Category::where('slug', 'earrings')->first();

        Product::create([
            'category_id' => $necklace->id,
            'name' => 'Petal Charm Necklace',
            'price' => 500,
            'old_price' => 900,
            'image' => 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
            'stock' => 50,
        ]);

        Product::create([
            'category_id' => $earrings->id,
            'name' => 'Pearl Drop Earrings',
            'price' => 1100,
            'old_price' => 1799,
            'image' => 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
            'stock' => 40,
        ]);
    }
}
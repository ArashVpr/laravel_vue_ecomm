<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->text(),
            'image' => fake()->imageUrl(),
            'description' => fake()->realText(2000),
            'status' => fake()->randomElement(['new', 'used']),
            'price' => fake()->randomFloat(2, 100, 1000),
            'created_at' => now(),
            'updated_at' => now(),
            'created_by' => 1, // Assuming 1 is the ID of the user creating the product
            'updated_by' => 1, // Assuming 1 is the ID of the user updating the product
        ];
    }
}

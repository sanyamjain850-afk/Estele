<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            $table->dropForeign(['product_id']);
        });

        Schema::table('order_items', function (Blueprint $table) {
            $table->string('product_id')->change();
        });
    }

    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id')->change();
        });

        Schema::table('order_items', function (Blueprint $table) {
            $table->foreign('product_id')->references('id')->on('products');
        });
    }
};
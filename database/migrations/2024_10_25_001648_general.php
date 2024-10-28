<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enterprises', function (Blueprint $table) {
            $table->id(); // PK
            $table->string('name'); 
            $table->text('logo');
            $table->timestamps(); 
            $table->softDeletes();
         });
        
        Schema::create('categories', function (Blueprint $table) {
            $table->id(); // PK
            $table->string('name'); 
            $table->text('description')->nullable(); 
            $table->timestamps(); 
            $table->softDeletes();
        });
        
        Schema::create('type_payments', function (Blueprint $table) {
            $table->id(); // PK
            $table->string('name');
            $table->timestamps(); 
            $table->softDeletes();
        });

        Schema::create('status', function (Blueprint $table) {
            $table->id(); // PK
            $table->string('status'); 
            $table->timestamps(); 
            $table->softDeletes();
        });
        
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // PK
            $table->string('name'); 
            $table->text('description')->nullable();
            $table->decimal('price', 8,2); 
            $table->text('picture');
            $table->timestamps(); 
            $table->softDeletes();

            $table->unsignedBigInteger('category_id'); 
            $table->foreign('category_id')->references('id')->on('categories'); 

         });
         
        Schema::create('orders', function (Blueprint $table) {
            $table->id(); // PK
            $table->string('client_name'); 
            $table->decimal('subtotal', 8,2);
            $table->timestamps(); 
            $table->softDeletes();

            $table->unsignedBigInteger('type_payment_id'); 
            $table->foreign('type_payment_id')->references('id')->on('type_payments'); 

            $table->unsignedBigInteger('status_id'); 
            $table->foreign('status_id')->references('id')->on('status'); 

            // Modificación: permitir valores nulos en user_id
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users'); 

        });

        Schema::create('order_details', function (Blueprint $table) {
            $table->id(); // PK
            $table->timestamps(); 
            $table->softDeletes();

            $table->unsignedBigInteger('order_id'); 
            $table->foreign('order_id')->references('id')->on('orders'); 
            
            $table->unsignedBigInteger('product_id'); 
            $table->foreign('product_id')->references('id')->on('products'); 
            // Cantidad de producto en el pedido
            $table->integer('quantity')->default(1);

        });


    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {   
        Schema::dropIfExists('order_details');  
        Schema::dropIfExists('orders');  
        Schema::dropIfExists('products');  
        Schema::dropIfExists('status');  
        Schema::dropIfExists('users'); 
        Schema::dropIfExists('type_payments'); 
        Schema::dropIfExists('categories'); 
        Schema::dropIfExists('enterprises');
    }
};

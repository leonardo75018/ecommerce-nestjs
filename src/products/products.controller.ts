import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {$

    constructor(private productService : ProductsService){}

    @Get()
    getProducts(): {}{
        return this.productService.findAll()
    }

    @Get(":id")
    getProductById(@Param("id") id){
        return this.productService.fidOne(id)
    }

    @Post()
    createProduct(@Body() newProduct: CreateProductDto ): string{
        return this.productService.create(newProduct)
    }

    @Put(":id")
    updateProduct(@Param("id") id, @Body() body){ 

    }

    @Delete(":id")
    deleteProduct(@Param("id") id){
        return this.productService.remove(id)
    }

}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @Post()
  addProducts(
    @Body('title') pTitle: string,
    @Body('description') pDesc: string,
    @Body('price') pPrice: number,
  ) {
    // functionality to store products
    const returnedId = this.productsService.insertProduct(
      pTitle,
      pDesc,
      pPrice,
    );

    return { id: returnedId };
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() productData: Product) {
    const updateProduct = this.productsService.updateProduct(id, productData);
    return updateProduct;
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productsService.partialUpdate(id, productData);
    return updatedProduct;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    this.productsService.removeProduct(id);
    return { message: 'Product Deleted Successfully!' };
  }
}

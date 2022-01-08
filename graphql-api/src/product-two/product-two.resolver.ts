import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductTwoService } from './product-two.service';
import { CreateProductTwoInput } from './dto/create-product-two.input';
import { UpdateProductTwoInput } from './dto/update-product-two.input';

@Resolver('ProductTwo')
export class ProductTwoResolver {
  constructor(private readonly productTwoService: ProductTwoService) {}

  @Mutation('createProductTwo')
  create(@Args('createProductTwoInput') createProductTwoInput: CreateProductTwoInput) {
    return this.productTwoService.create(createProductTwoInput);
  }

  @Query('productTwoAll')
  findAll() {
    return this.productTwoService.findAll();
  }

  @Query('productTwo')
  findOne(@Args('id') id: number) {
    return this.productTwoService.findOne(id);
  }

  @Mutation('updateProductTwo')
  update(@Args('updateProductTwoInput') updateProductTwoInput: UpdateProductTwoInput) {
    return this.productTwoService.update(updateProductTwoInput.id, updateProductTwoInput);
  }

  @Mutation('removeProductTwo')
  remove(@Args('id') id: number) {
    return this.productTwoService.remove(id);
  }
}

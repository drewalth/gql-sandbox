import { Injectable } from '@nestjs/common';
import { CreateProductTwoInput } from './dto/create-product-two.input';
import { UpdateProductTwoInput } from './dto/update-product-two.input';

@Injectable()
export class ProductTwoService {
  create(createProductTwoInput: CreateProductTwoInput) {
    return 'This action adds a new productTwo';
  }

  findAll() {
    return [`This action returns all productTwo`];
  }

  findOne(id: number) {
    return `This action returns a #${id} productTwo`;
  }

  update(id: number, updateProductTwoInput: UpdateProductTwoInput) {
    return `This action updates a #${id} productTwo`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTwo`;
  }
}

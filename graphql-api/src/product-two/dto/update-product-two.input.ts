import { CreateProductTwoInput } from './create-product-two.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProductTwoInput extends PartialType(CreateProductTwoInput) {
  id: number;
}

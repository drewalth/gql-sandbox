import { Module } from '@nestjs/common';
import { ProductTwoService } from './product-two.service';
import { ProductTwoResolver } from './product-two.resolver';

@Module({
  providers: [ProductTwoResolver, ProductTwoService]
})
export class ProductTwoModule {}

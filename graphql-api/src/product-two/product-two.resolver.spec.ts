import { Test, TestingModule } from '@nestjs/testing';
import { ProductTwoResolver } from './product-two.resolver';
import { ProductTwoService } from './product-two.service';

describe('ProductTwoResolver', () => {
  let resolver: ProductTwoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTwoResolver, ProductTwoService],
    }).compile();

    resolver = module.get<ProductTwoResolver>(ProductTwoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

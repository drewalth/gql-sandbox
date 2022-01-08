import { Test, TestingModule } from '@nestjs/testing';
import { ProductTwoService } from './product-two.service';

describe('ProductTwoService', () => {
  let service: ProductTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTwoService],
    }).compile();

    service = module.get<ProductTwoService>(ProductTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

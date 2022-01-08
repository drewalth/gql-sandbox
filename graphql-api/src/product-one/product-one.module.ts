import { Module, HttpModule } from '@nestjs/common';
import { ProductOneService } from './product-one.service';
import { ProductOneResolver } from './product-one.resolver';
import { ItemService } from '../item/item.service';

@Module({
  imports: [
    HttpModule.register({
      headers: {
        Accept: 'application/json, text/plain, */*',
        ['accept-encoding']: 'gzip, deflate, br',
      },
    }),
  ],
  providers: [ProductOneService, ProductOneResolver, ItemService],
})
export class ProductOneModule {}

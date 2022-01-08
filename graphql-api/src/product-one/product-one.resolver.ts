import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {ProductOneService} from './product-one.service';
import {ItemService} from '../item/item.service';
import {ProductOne} from "../graphql";

@Resolver('ProductOne')
export class ProductOneResolver {
  constructor(
    private productOneService: ProductOneService,
    private itemService: ItemService,
  ) {}

  @Query()
  async productOneAll() {
    return this.productOneService.findAll();
  }

  @Query()
  async productOne(@Args('id') id: number) {
    return this.productOneService.findOne(id);
  }

  @ResolveField()
  async items(@Parent() productOne:ProductOne) {
    return this.itemService.findAll(productOne.id);
  }
}

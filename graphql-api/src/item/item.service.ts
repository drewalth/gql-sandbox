import {HttpService, Injectable, Logger} from '@nestjs/common';
import {Item} from '../graphql';

@Injectable()
export class ItemService {
  constructor(private httpService: HttpService) {}

  private logger = new Logger(ItemService.name);


  async findAll(productId: number): Promise<Item[]> {
    return  this.httpService
        .get('http://localhost:3002')
        .toPromise()
        .then(({ data }) => {
          // this should happen on other api
          return data.filter((el:Item) => el.productId === productId);
        });
  }
}

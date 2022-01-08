import { HttpService, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProductOneService {
  constructor(private httpService: HttpService) {}

  private logger = new Logger(ProductOneService.name);

  async findAll() {
    return this.httpService
      .get('http://localhost:3001')
      .toPromise()
      .then(({ data }) => data);
  }

  async findOne(id: number) {
    return this.httpService
      .get('http://localhost:3001')
      .toPromise()
      .then(({ data }) => {
        // this should happen on other api
        return data.find((el) => el.id === id);
      });
  }
}

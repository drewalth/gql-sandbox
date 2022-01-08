import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductOneModule } from './product-one/product-one.module';
import { join } from 'path';
import { ItemModule } from './item/item.module';
import { ProductTwoModule } from './product-two/product-two.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: true,
      playground: true,
      // cors: {
      //   origin: 'http://localhost:3003',
      //   credentials: true
      // }
    }),
    ProductOneModule,
    ItemModule,
    ProductTwoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

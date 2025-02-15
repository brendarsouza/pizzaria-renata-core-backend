import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { MenuModule } from './menu/menu.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [AuthModule, ProductsModule, MenuModule, CustomersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

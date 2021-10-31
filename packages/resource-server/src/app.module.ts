import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { HttpStrategy } from './auth/http.strategy.service';
import { FruitModule } from './fruit/fruit.module';

@Module({
  imports: [ConfigModule.forRoot(), FruitModule],
  controllers: [AppController],
  providers: [AppService, HttpStrategy, AuthService],
})
export class AppModule {}

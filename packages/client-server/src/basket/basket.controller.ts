import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketWithFruitDto } from './dto/update-basket.dto';
import { HttpInterceptor } from '../http.interceptor';

@Controller('basket')
@UseInterceptors(HttpInterceptor)
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketService.create(createBasketDto);
  }

  @Get()
  findAll() {
    return this.basketService.findAll();
  }

  @Get('/fruits')
  findAllFruits() {
    return this.basketService.findAllFruits();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBasketDto: UpdateBasketWithFruitDto,
  ) {
    return this.basketService.addFruitsInBasket(+id, updateBasketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}

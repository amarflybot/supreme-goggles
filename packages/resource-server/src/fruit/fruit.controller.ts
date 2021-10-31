import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FruitService } from './fruit.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { AuthGuard } from '@nestjs/passport';
import { ScopeGuard } from '../scope.guard';
import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { Scope } from '../scope.decorator';

@Controller('fruit')
@UseGuards(AuthGuard('bearer'), ScopeGuard)
export class FruitController {
  private oktaJwtVerifier: OktaJwtVerifier;
  constructor(private readonly fruitService: FruitService) {
    this.oktaJwtVerifier = new OktaJwtVerifier({
      issuer:
        process.env.ISSUER ||
        'https://acmamarflybot.okta.com/oauth2/aus53f2q22BVsNMk8696',
    });
  }

  @Post()
  @Scope('create:fruit')
  create(@Body() createFruitDto: CreateFruitDto) {
    return this.fruitService.create(createFruitDto);
  }

  @Get()
  @Scope('query:fruit')
  findAll() {
    return this.fruitService.findAll();
  }

  @Get(':id')
  @Scope('query:fruit')
  findOne(@Param('id') id: string) {
    return this.fruitService.findOne(+id);
  }

  @Patch(':id')
  @Scope('update:fruit')
  update(@Param('id') id: string, @Body() updateFruitDto: UpdateFruitDto) {
    return this.fruitService.update(+id, updateFruitDto);
  }

  @Delete(':id')
  @Scope('delete:fruit')
  remove(@Param('id') id: string) {
    return this.fruitService.remove(+id);
  }
}

import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '../../generated/prisma';


@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger: Logger = new Logger('ProductsService');

  onModuleInit() {
    this.$connect();
    this.logger.log( 'Database connected' );
  }

  create(createProductDto: CreateProductDto) {
    //return createProductDto;
    return this.product.create({
      data: createProductDto
    });
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

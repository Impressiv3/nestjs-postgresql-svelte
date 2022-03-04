import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('products')
  findPublishedProducts() {
    return this.prisma.product.findMany({
      where: { name: 'Product1' },
    });
  }
}

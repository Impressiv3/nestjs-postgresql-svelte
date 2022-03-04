import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PrismaCrudModule } from 'nestjs-prisma-crud';

@Module({
  imports: [PrismaCrudModule.register({ prismaService: PrismaService })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

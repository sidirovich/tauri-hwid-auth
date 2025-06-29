import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HwidModule } from './hwid/hwid.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [HwidModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}

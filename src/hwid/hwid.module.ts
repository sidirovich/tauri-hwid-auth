import { Module } from '@nestjs/common';
import { HwidController } from './hwid.controller';
import { HwidService } from './hwid.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HwidController],
  providers: [HwidService]
})
export class HwidModule {}

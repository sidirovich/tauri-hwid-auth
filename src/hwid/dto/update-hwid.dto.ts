import { PartialType } from '@nestjs/mapped-types';
import { CreateHwidDto } from './create-hwid.dto';
import { Hwid } from '../entities/hwid.entity';

export class UpdateHwidDto extends PartialType(Hwid) { }

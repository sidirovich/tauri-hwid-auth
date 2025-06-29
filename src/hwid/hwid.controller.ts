import { Controller, Get, Post, Body, Param, Delete, Injectable } from '@nestjs/common';
import { CreateHwidDto } from './dto/create-hwid.dto';
import { HwidService } from './hwid.service';

@Controller('hwids')
export class HwidController {
  constructor(private readonly hwidService: HwidService) {}

  @Post('/verify')
  verify(@Param('hwid') hwid: string) {
    return this.hwidService.hwidVerify(hwid);
  }

  @Get('/add')
  addHwidByCode(@Param('code') code: string, @Param('hwid') hwid: string) {
    return this.hwidService.addHwidByCode(code, hwid)
  }

  @Get('/new')
  addNewCode(@Param('code') code: string, @Param('days') days: number ) {
    return this.hwidService.addNewCode(code, days);
  }

  @Delete()
  delete(@Param('hwid') hwid: string) {
    return this.hwidService.deleteHwid(hwid);
  }
}

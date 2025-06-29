import { Controller, Get, Post, Body, Param, Delete, Injectable, Query } from '@nestjs/common';
import { HwidService } from './hwid.service';

@Controller('hwids')
export class HwidController {
  constructor(private readonly hwidService: HwidService) {}

  @Get('/verify')
  verify(@Query('hwid') hwid: string) {
    return this.hwidService.hwidVerify(hwid);
  }

  @Get('/add')
  addHwidByCode(@Query('code') code: string, @Query('hwid') hwid: string) {
    return this.hwidService.addHwidByCode(code, hwid)
  }

  @Get('/new')
  addNewCode(@Query('code') code: string, @Query('days') days: number ) {
    console.log('Controller.hwids.addNewCode: ', {
      code,
      days,
    })
    return this.hwidService.addNewCode(code, Number(days));
  }

  @Delete()
  delete(@Query('hwid') hwid: string) {
    return this.hwidService.deleteHwid(hwid);
  }
}

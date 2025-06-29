import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Hwid, Prisma } from '@prisma/client';

@Injectable()
export class HwidService {
  constructor(private prisma: PrismaService) {}

  async hwidVerify(
    hwid: string,
  ): Promise<{ status: string }> {
    return this.prisma.hwid.findMany({
      where: {
        hwid: hwid,
        expiredAt: { gte: new Date() },
      },
    }).then(res => {
        return {
            status: res.length ? 'ok' : 'expired',
            data: res,
        }
    }).catch(() => ({
        status: 'error',
    }));
  }

  async addHwidByCode(
    code: string,
    hwid: string,
  ): Promise<{ status: string }> {
    return this.prisma.hwid.update({
        data: {
            hwid: hwid,
        },
        where: {
            code: code,
        }
    }).then(res => {
        return {
            status: 'ok',
            data: res,
        }
    }).catch(() => ({
        status: 'error',
    }));
  }

  async addNewCode(
    code: string,
    validityDays: number,
  ): Promise<{ status: string }> {

    const expiredAt = new Date(new Date().getTime() + validityDays * 86_400_000)

    return this.prisma.hwid.create({
        data: {
            code: code,
            expiredAt: expiredAt,
        },
    }).then((res) => {
        return {
            status: 'ok',
            data: res,
        }
    }).catch(() => ({
        status: 'error',
    }));
  }

  async updateHwid(params: {
    where: Prisma.HwidWhereUniqueInput;
    data: Prisma.HwidUpdateInput;
  }): Promise<Hwid> {
    const { data, where } = params;
    return this.prisma.hwid.update({
      data,
      where,
    });
  }

  async deleteHwid(hwid: string): Promise<Hwid> {
    return this.prisma.hwid.update({
        data: {
            expiredAt: new Date(),
        },
        where: {
            hwid: hwid
        },
    });
  }
}
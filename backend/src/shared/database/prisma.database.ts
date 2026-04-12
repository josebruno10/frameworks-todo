import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { join } from 'node:path';
import type {
  Prisma,
  PrismaClient as GeneratedPrismaClient,
} from '../../../generated/prisma';

// Carrega o client gerado em runtime a partir da raiz do projeto.
// Evita problemas de caminho relativo quando o código está em dist/.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require(join(process.cwd(), 'generated/prisma')) as {
  PrismaClient: new (
    options?: Prisma.PrismaClientOptions,
  ) => GeneratedPrismaClient;
};

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}

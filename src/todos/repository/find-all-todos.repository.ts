import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.database';

@Injectable()
export class FindAllTodosRepository {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}
  async execute() {
    return await this.prisma.todo.findMany();
  }
}

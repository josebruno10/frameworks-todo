import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.database';

@Injectable()
export class FindAllTodosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute() {
    return await this.findAll();
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }
}

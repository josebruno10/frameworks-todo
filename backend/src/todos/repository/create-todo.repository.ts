import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.database';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: CreateTodoDto) {
    return await this.prisma.todo.create({ data });
  }
}

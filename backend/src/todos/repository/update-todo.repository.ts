import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.database';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class UpdateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, data: UpdateTodoDto) {
    return await this.prisma.todo.update({
      where: { id },
      data,
    });
  }
}

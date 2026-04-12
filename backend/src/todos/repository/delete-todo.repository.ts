import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.database';

@Injectable()
export class DeleteTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    return await this.prisma.todo.delete({
      where: { id },
    });
  }
}

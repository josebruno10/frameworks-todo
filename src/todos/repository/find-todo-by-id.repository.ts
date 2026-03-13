import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.database';

@Injectable()
export class FindTodoByIdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string) {
    return await this.prisma.todo.findUnique({
      where: { id },
    });
  }
}

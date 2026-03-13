import { Injectable, Logger } from '@nestjs/common';
import { FindTodoByIdRepository } from '../repository';

@Injectable()
export class FindTodoByIdUseCase {
  constructor(
    private readonly findTodoByIdRepository: FindTodoByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      this.logger.log('Finding todo by id...');
      const todo = await this.findTodoByIdRepository.execute(id);
      this.logger.log('Todo found successfully');
      return todo;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to find todo');
    }
  }
}

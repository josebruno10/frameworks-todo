import { Injectable, Logger } from '@nestjs/common';
import { DeleteTodoRepository, FindTodoByIdRepository } from '../repository';

@Injectable()
export class DeleteTodoUseCase {
  constructor(
    private readonly deleteTodoRepository: DeleteTodoRepository,
    private readonly findTodoByIdRepository: FindTodoByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      this.logger.log('Deleting todo...');
      const todo = await this.findTodoByIdRepository.execute(id);
      if (!todo) {
        throw new Error('Todo not found');
      }

      await this.deleteTodoRepository.delete(id);
      this.logger.log('Todo deleted successfully');
      return todo;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to delete todo');
    }
  }
}

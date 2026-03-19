import { Injectable, Logger } from '@nestjs/common';
import { FindTodoByIdRepository, UpdateTodoRepository } from '../repository';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class UpdateTodoUseCase {
  constructor(
    private readonly updateTodoRepository: UpdateTodoRepository,
    private readonly findTodoByIdRepository: FindTodoByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateTodoDto) {
    try {
      this.logger.log('Updating todo...');

      const todo = await this.findTodoByIdRepository.execute(id);
      if (!todo) {
        throw new Error('Todo not found');
      }

      const updatedTodo = await this.updateTodoRepository.update(id, data);
      this.logger.log('Todo updated successfully');
      return updatedTodo;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to update todo');
    }
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { FindAllTodosRepository } from '../repository';

@Injectable()
export class FindAllTodosUseCase {
  constructor(
    private readonly findAllTodosRepository: FindAllTodosRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      this.logger.log('Finding all todos...');
      const todos = await this.findAllTodosRepository.execute();
      this.logger.log('Todos found successfully');
      return todos;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to find todos');
    }
  }
}

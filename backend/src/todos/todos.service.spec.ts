import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@nestjs/common';
import { CreateTodoUseCase } from './use-cases/create-todo.use-case';
import { DeleteTodoUseCase } from './use-cases/delete-todo.use-case';
import { FindAllTodosUseCase } from './use-cases/find-all-todos.use-case';
import { FindTodoByIdUseCase } from './use-cases/find-todo-by-id.use-case';
import { UpdateTodoUseCase } from './use-cases/update-todo.use-case';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        Logger,
        {
          provide: CreateTodoUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: DeleteTodoUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: UpdateTodoUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: FindAllTodosUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: FindTodoByIdUseCase,
          useValue: { execute: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

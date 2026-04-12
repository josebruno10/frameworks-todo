import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { PrismaService } from '../shared/database/prisma.database';

const useCase = Object.values(UseCases);
const repository = Object.values(Repositories);

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaService, Logger, ...useCase, ...repository],
})
export class TodosModule {}

import { TodoPriority } from '../../../generated/prisma';

export class CreateTodoDto {
  title: string;
  description?: string;
  priority?: TodoPriority;
  dueAt?: Date;
  userId: string;
}

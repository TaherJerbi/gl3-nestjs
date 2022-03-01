// import { Todo } from './Model/todo.model';
import { PartialType, PickType } from '@nestjs/mapped-types';
import { TodoStatusEnum } from './enums/todo-status.enum';
export class CreateTodoDTO {
  name: string;
  description: string;
}
export class UpdateTodoDTO extends PartialType(CreateTodoDTO) {
  status: TodoStatusEnum;
}

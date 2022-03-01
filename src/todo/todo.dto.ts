// import { Todo } from './Model/todo.model';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { TodoStatusEnum } from './enums/todo-status.enum';
import { OBLIGATOIR, TROP_LONG, TROP_COURT } from './error.messages';
export class CreateTodoDTO {
  @IsNotEmpty({
    message: OBLIGATOIR,
  })
  @MaxLength(10, {
    message: TROP_LONG(10),
  })
  @MinLength(3, {
    message: TROP_COURT(3),
  })
  name: string;

  @IsNotEmpty({
    message: OBLIGATOIR,
  })
  @MinLength(10, {
    message: TROP_COURT(10),
  })
  description: string;
}

export class UpdateTodoDTO extends PartialType(CreateTodoDTO) {
  status: TodoStatusEnum;
}

import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { UpdateTodoDTO } from './todo.dto';
import { TodoService } from './todo-service/todo.service';
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get('/null')
  null() {
    return null;
  }
  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }
  @Post()
  addTodo(@Body() newTodo: Todo): Todo {
    return this.todoService.addTodo(newTodo);
  }
  @Get('/:id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todoService.getTodoById(id);
  }
  @Delete('/:id')
  deleteTodoById(@Param('id') id: string): string {
    return this.todoService.deleteTodoById(id);
  }
  @Patch('/:id')
  updateTodo(@Body() todoUpdates: UpdateTodoDTO, @Param('id') id: string) {
    return this.todoService.updateTodo(id, todoUpdates);
  }
}

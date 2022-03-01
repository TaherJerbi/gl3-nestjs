import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from '../Model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDTO, UpdateTodoDTO } from '../todo.dto';
@Injectable()
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(newTodo: CreateTodoDTO): Todo {
    let todo = new Todo();
    todo.id = uuidv4();
    todo = { ...todo, ...newTodo };
    this.todos.push(todo);
    return todo;
  }
  getTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }
  deleteTodoById(id: string): string {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return id;
  }
  updateTodo(id: string, todoUpdates: UpdateTodoDTO) {
    let updatedTodo;
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        updatedTodo = { ...todo, ...todoUpdates };
        return updatedTodo;
      }
      return todo;
    });
    return updatedTodo;
  }
}

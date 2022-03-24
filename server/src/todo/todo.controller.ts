import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create.todo';
import { TodoService } from './todo.service';
//4
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  create(@Body() userDto: CreateTodoDto) {
    return this.todoService.createTodo(userDto);
  }
}
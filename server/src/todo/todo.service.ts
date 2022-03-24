import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodoDto } from './dto/create.todo';
import { Todo } from './todo.model';
// 3
@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async createTodo(dto: CreateTodoDto) {
    const todo = await this.todoRepository.create(dto);
    return todo;
  }
}

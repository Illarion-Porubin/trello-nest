import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.model'
//5
@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [SequelizeModule.forFeature([Todo])],
})
export class TodoModule {}
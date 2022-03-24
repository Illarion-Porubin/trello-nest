import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ListModule } from './list/list.module';
import { TodoModule } from './todo/todo.module';
import { User } from './users/users.model';
import { List } from './list/list.model';
import { Todo } from './todo/todo.model';
@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      models: [User, List, Todo],
      autoLoadModels: true,
    }),
    UsersModule,
    ListModule,
    TodoModule,
  ],
})
export class AppModule {}

// "pg": "^8.7.3",
// "pg-hstore": "^2.3.4",
// "sequelize": "^6.17.0",
// "sequelize-typescript": "^2.1.3"
// "@nestjs/platform-express": "^8.0.0",
// "@nestjs/sequelize": "^8.0.0",
// "@nestjs/serve-static": "^2.2.2",

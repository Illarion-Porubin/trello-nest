import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListController } from './list.controller';
import { ListService } from './list.sevice';
import { List } from './list.model';

@Module({
  controllers: [ListController],
  providers: [ListService],
  imports: [SequelizeModule.forFeature([List])],
})
export class ListModule {}

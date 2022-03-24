import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateListDto } from './dto/create.list.dto';
import { List } from './list.model';

@Injectable()
export class ListService {
  constructor(@InjectModel(List) private listRepository: typeof List) {}

  async createList(dto: CreateListDto) {
    const list = await this.listRepository.create(dto);
    return list;
  }

  async getAllLists() {
    const list = await this.listRepository.findAll();
    return list;
  }
}

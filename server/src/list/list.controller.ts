import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateListDto } from './dto/create.list.dto';
import { ListService } from './list.sevice';

@Controller('lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Post()
  create(@Body() listDto: CreateListDto) {
    return this.listService.createList(listDto);
  }

  @Get()
  getAll() {
    return this.listService.getAllLists();
  }
}

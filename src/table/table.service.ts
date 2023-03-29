import { Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";
import { UpdateTableDto } from "./dto/update-table.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Table } from "./entities/table.entity";

@Injectable()
export class TableService {

  constructor(@InjectRepository(Table)
              private tableRepository: Repository<Table>) {
  }

  create(createTableDto: CreateTableDto) {
    //"This action adds a new table";
    return this.tableRepository.save(createTableDto);
  }

  findAll() {
    return this.tableRepository.find();
  }

  findOne(id: number) {
    // `This action returns a #${id} table`;
    return this.tableRepository.findBy({
      id
    });
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    // `This action updates a #${id} table`;
    return this.tableRepository.update(id, updateTableDto);
  }

  remove(id: number) {
    // `This action removes a #${id} table`;
    return this.tableRepository.delete(id);
  }
}

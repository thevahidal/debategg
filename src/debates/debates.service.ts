import { Injectable } from '@nestjs/common';
import { CreateDebateInput } from './dto/create-debate.input';
import { UpdateDebateInput } from './dto/update-debate.input';

@Injectable()
export class DebatesService {
  create(createDebateInput: CreateDebateInput) {
    return 'This action adds a new debate';
  }

  findAll() {
    return `This action returns all debates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} debate`;
  }

  update(id: number, updateDebateInput: UpdateDebateInput) {
    return `This action updates a #${id} debate`;
  }

  remove(id: number) {
    return `This action removes a #${id} debate`;
  }
}

import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { CreateDebateInput } from './dto/create-debate.input';
import { UpdateDebateInput } from './dto/update-debate.input';
import { Debate, DebateDocument } from './schemas/debate.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DebatesService {
  constructor(@InjectModel(Debate.name) private debateModel: Model<DebateDocument>) {}


  async create(createDebateInput: CreateDebateInput): Promise<Debate> {
    const createdDebate = new this.debateModel(createDebateInput);
    return createdDebate.save();
  }

  async findAll(): Promise<Debate[]> {
    return this.debateModel.find().exec();
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

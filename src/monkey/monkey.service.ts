import { Injectable } from '@nestjs/common';
import { CreateMonkeyInput } from './dto/create-monkey.input';
import { UpdateMonkeyInput } from './dto/update-monkey.input';

@Injectable()
export class MonkeyService {
  create(createMonkeyInput: CreateMonkeyInput) {
    return 'This action adds a new monkey';
  }

  findAll() {
    return `This action returns all monkey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monkey`;
  }

  update(id: number, updateMonkeyInput: UpdateMonkeyInput) {
    return `This action updates a #${id} monkey`;
  }

  remove(id: number) {
    return `This action removes a #${id} monkey`;
  }
}

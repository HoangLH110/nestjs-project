import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(body: any) {
    try {
      return await this.userRepository.save(body);
    } catch (err) {
      console.log(
        '🚀 ~ file: user.service.ts:15 ~ UserService ~ create ~ err:',
        err,
      );
    }
  }

  async findOne(query: any): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: query });
    } catch (err) {
      console.log(
        '🚀 ~ file: user.service.ts:26 ~ UserService ~ findOne ~ err:',
        err,
      );
    }
  }

  async update(id: string, body: any) {
    try {
      return await this.userRepository.update(id, body);
    } catch (err) {
      console.log(
        '🚀 ~ file: user.service.ts:37 ~ UserService ~ update ~ err:',
        err,
      );
    }
  }

  async delete(id: string) {
    try {
      return await this.userRepository.delete(id);
    } catch (err) {
      console.log(
        '🚀 ~ file: user.service.ts:48 ~ UserService ~ delete ~ err:',
        err,
      );
    }
  }
}

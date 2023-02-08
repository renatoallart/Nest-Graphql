import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

//Service  it's the function then I create to serve to resolver
// Repositories are to management of the Entity(User, Pet, ect ...)

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.usersRepository.find(); // SELECT * user
  }

  async createUser(createUser: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUser); // newUser = new User(...)
    return this.usersRepository.save(newUser);
  }
}

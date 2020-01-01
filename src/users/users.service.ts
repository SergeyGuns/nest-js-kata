import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

interface UserType {
  username: string
  password: string
}

@Injectable()
export class UsersService {
 
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>

  ) {
    const defaultUsers = [
      {
        username: 'john',
        password: 'changeme',
      },
      {
        username: 'chris',
        password: 'secret',
      },
      {
        username: 'maria',
        password: 'guess',
      },
    ];
    userRepository.create(defaultUsers)
  } 

  async findOne(username:string):Promise<User>{
    return this.userRepository
    .createQueryBuilder("user")
    .where("user.username = :username", { username })
    .getOne();
  }
  
  async findAll(): Promise<User[]>{
    return this.userRepository.find()
  }
}
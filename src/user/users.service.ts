import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from '../auth/create-user.dto';
import { User } from './users.entity'; // Assuming you have a User entity

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser);
  }
  async updateUserData(userId: string, updatedUserData: any): Promise<UpdateResult> {
    console.log('user service updatedUserData:', {updatedUserData});
    return this.usersRepository.update(userId, updatedUserData);
  }
  // Additional methods as needed, e.g., createUser, updateUser, etc.
}

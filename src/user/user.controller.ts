import { Body, Controller, Delete, Get, Param, Post, Patch, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from 'src/auth/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find()
  }

  @Get(':id')
  async findUserById(@Param('id') id: any): Promise<User> {
    return await this.userRepository.findOne(id)
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userRepository.save(user)
  }

  @Put(':id')
  async updateUser(@Param('id') id: any, @Body() user: User): Promise<User> {
    await this.userRepository.update(id, user)
    return await this.userRepository.findOne(id)
  }

  @Delete()
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
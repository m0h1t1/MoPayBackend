import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TypeOrmExModule } from 'src/custom-repository/typeorm-ex.module';
import { UserController } from './user.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])],
    //TypeOrmExModule.forCustomRepository([UsersRepository])],
  providers: [UsersService],
  controllers: [UserController], // Export UsersService
  exports: [UsersService]
})
export class UsersModule {}

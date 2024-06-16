import {
  BadRequestException,
  Body,
  Controller,
  Put,
  InternalServerErrorException,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UsersService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtAuthGuard } from 'src/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log('INSIDE Authcontroller LOGIN:',loginUserDto.username, loginUserDto.password)
    const user = await this.authService.validateUser(loginUserDto.username, loginUserDto.password)

    if (user) {
      console.log('User Validated: ', user)
      // Generate JWT Token 
      const payload = { username: user.username, sub: user.id }
      const token = this.authService.generateJwtToken(payload)

      return { user, token }
    } else {
      console.log('Invalid Credentials')
      throw new UnauthorizedException('Invalid Credentials')
    }
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    console.log('Inside AuthController Register', createUserDto.email, createUserDto.password, createUserDto.username, createUserDto.phone)
    
    try {
      console.log('email:', createUserDto.email)
      if (!createUserDto.password) {
        throw new BadRequestException('Password Is Required!')
      }
      //Create hashed password
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
      //create and save new user
      const newUser = await this.userService.createUser({
        ...createUserDto,
        password: hashedPassword
      })

      if (newUser) {
        console.log('New User Registered: ', newUser.username)
        return 'User Successfully Registered'
      } else {
        console.log('Registration failed')
        return 'Registration failed'
      }
    } catch (error) {
      console.log('Error Registering User: ', error)
      throw new InternalServerErrorException('Failed to register user');
    }
  }


  @UseGuards(JwtAuthGuard)
  @Put('update-profile')
  async updateProfile(@Request() req: any, @Body() updatedUserData: any) {
    try {
      if (updatedUserData.password) {
        // Hash the new password before updating
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
      }
      console.log('Controller updatedUserData:', { updatedUserData })
      const result = await this.userService.updateUserData(updatedUserData.userId, updatedUserData);
      if (result) {
        return { success: true, result };
      } else {
        throw new BadRequestException('Failed to update profile');
      }
    } catch (error) {
      throw new InternalServerErrorException('Error updating profile');
    }
  }

}

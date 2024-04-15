import { Controller, Post, Body, UnauthorizedException, Put, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from '../user/users.service' // Make sure to import UsersService
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; // Import JwtService
import { JwtAuthGuard } from '../jwt-auth.guard' // Import your JwtAuthGuard

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService, // Add UsersService to the constructor
    private jwtService: JwtService, // Inject JwtService
  ) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log('INSIDE Authcontroller LOGIN');
    const user = await this.authService.validateUser(loginUserDto.username, loginUserDto.password);

    if (user) {
      console.log('User validated:', user);

      // Generate JWT token
      //const payload = { username: user.username, sub: user.id };
      //const token = this.jwtService.sign(payload);

      return user;
      /* Return both userId and token
      return {
        userId: user.userId,
        token: token,
      };
      */
    } else {
      console.log('Invalid credentials');
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    console.log('INSIDE Authcontroller Register');

    // Hash the password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Create and save the new user
    const newUser = await this.usersService.createUser({
      ...createUserDto,
      password: hashedPassword,
    });

    if (newUser) {
      console.log('New user registered:', newUser.username);
      // You might want to return some user info or a success message
      return 'User successfully registered';
    } else {
      // Handle registration failure
      console.log('Registration failed');
      return 'Registration failed';
    }
  }

  //@UseGuards(JwtAuthGuard)
  @Put('update-profile')
  async updateProfile(@Request() req: any, @Body() updatedUserData: any) {

    try {
      // Check if a new password is provided
      if (updatedUserData.password) {
        // Hash the new password before updating
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      }
      console.log('Controller updatedUserData:', {updatedUserData});

      const result = await this.usersService.updateUserData(updatedUserData.userId, updatedUserData);
      return { success: true, result };
    } catch (error) {
      return { success: false, error: 'Error updating profile' };
    }
  }

  @Post('test')
  async test() {
    console.log('INSIDE Authcontroller test')
  }
}

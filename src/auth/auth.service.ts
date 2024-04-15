import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService, // Inject the JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async updateUserData(userId: string, updatedUserData: any): Promise<any> {
    // Assuming you have a method to update user data in your UsersService
    console.log('updatedUserData:', {updatedUserData});
    const updatedUser = await this.usersService.updateUserData(userId, updatedUserData);
    // You might want to handle any additional logic or validation here
    return updatedUser;
  }

  /* Method to generate JWT
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }*/
}

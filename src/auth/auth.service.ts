import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('INSIDE AuthService validateUser:',username, user, pass);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwtToken(payload: { username: string; sub: string }): string {
    return this.jwtService.sign(payload);
  }

  async updateUserData(userId: string, updatedUserData: any): Promise<any> {
    // Assuming you have a method to update user data in your UsersService
    console.log('updatedUserData:', {updatedUserData});
    const updatedUser = await this.usersService.updateUserData(userId, updatedUserData);
    // You might want to handle any additional logic or validation here
    return updatedUser;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }
    const token = this.generateJwtToken(user);
    return { user, token };
  }
  
  /*private generateJwtToken(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }*/
}
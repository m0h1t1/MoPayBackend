import { Controller, Get, UseGuards, Request } from '@nestjs/common'
import { JwtAuthGuard } from '../jwt-auth.guard'
import { UsersService } from './users.service'

@Controller('user')
export class UserController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserProfile(@Request() req: any) {
    const userId: number = req.user.userId // Assuming the user ID is stored in the JWT payload as a number
    console.log('user controller :', {userId})
    const user = await this.usersService.findOneById(userId)
    if (!user) {
      // Handle case where user is not found
      // You can throw an exception or return an appropriate response
    }
    return user
  }
}
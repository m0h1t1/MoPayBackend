// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/users.service';



@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: 'yourSecretKey', // Use your secret key here
            signOptions: { expiresIn: '1h' }, // Example expiration time
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtService, UsersService],
})
export class AuthModule {}

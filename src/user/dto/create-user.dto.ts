import { IsString } from 'class-validator'

export class CreateUserDto {
    @IsString()
    readonly userId: string;

    @IsString()
    userPassword: string;

    @IsString()
    readonly userName: string;
}
import { IsEmail, IsNotEmpty, IsNumber, isNotEmpty } from "class-validator";

export class CreateUserDto{
    
    @IsNotEmpty()
    username: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    age: number;
}
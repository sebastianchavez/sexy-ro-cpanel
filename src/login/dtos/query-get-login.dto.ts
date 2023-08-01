import { IsEmail, IsNotEmpty } from "class-validator";

export class QueryGetLoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
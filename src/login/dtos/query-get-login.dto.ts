import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class QueryGetLoginDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly user: string;
}
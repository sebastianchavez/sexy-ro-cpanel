import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class QueryGetLoginsDto {
    @IsNotEmpty()
    @IsNumber()
    readonly limit: number;

    @IsNotEmpty()
    @IsNumber()
    readonly page: number;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}
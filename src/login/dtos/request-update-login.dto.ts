import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RequestUpdateLoginDto {
    @IsNotEmpty()
    @IsNumber()
    readonly account_id: number;
    
    @IsNotEmpty()
    @IsString()
    readonly sex: string;

    @IsNotEmpty()
    @IsString()
    readonly user_pass: string;
}
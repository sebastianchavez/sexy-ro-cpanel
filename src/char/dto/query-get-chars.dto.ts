import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class QueryGetCharsDto {
    @IsNumber()
    @IsNotEmpty()
    readonly limit: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly page: number;
    
    @IsString()
    @IsOptional()
    readonly email?: string;
    
    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly ip?: string;
}
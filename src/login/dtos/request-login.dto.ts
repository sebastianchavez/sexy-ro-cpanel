import { IsNotEmpty, IsString } from 'class-validator'

export class RequestLogionDto {
    @IsNotEmpty()
    @IsString()
    readonly userid: string;

    @IsNotEmpty()
    @IsString()
    readonly user_pass: string;
    
    @IsNotEmpty()
    @IsString()
    readonly sex: string;
    
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    readonly last_ip: string;
}
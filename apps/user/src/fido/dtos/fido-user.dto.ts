import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
export class GenerateRegistrationDto {
    @ApiProperty({ example: 'abc@vomoto.com' })
    @IsNotEmpty({ message: 'Email is required.' })
    @IsEmail()
    userName: string;
    
    @IsOptional()
    @ApiProperty({ example: 'false' })
    @IsBoolean({ message: 'isPasskey should be boolean' })
    deviceFlag: boolean;
}

class ResponseDto {
    @ApiProperty()
    @IsString()
    attestationObject: string;
  
    @ApiProperty()
    @IsString()
    clientDataJSON: string;
  
    @ApiProperty()
    @IsArray()
    transports: string[];
  }
  
  class ClientExtensionResultsDto {
    @ApiProperty()
    @ValidateNested()
    credProps: Record<string, unknown>;
  }
  
  export class VerifyRegistrationDetailsDto {
    @ApiProperty()
    @IsString()
    id: string;
  
    @ApiProperty()
    @IsString()
    rawId: string;
  
    @ApiProperty()
    response: ResponseDto;
  
    @ApiProperty()
    @IsString()
    type: string;
  
    @ApiProperty()
    clientExtensionResults: ClientExtensionResultsDto;
  
    @ApiProperty()
    @IsString()
    authenticatorAttachment: string;
  
    @ApiProperty()
    @IsString()
    challangeId: string;
  }
  
  export class VerifyRegistrationPayloadDto {
    @ApiProperty()
    verifyRegistrationDetails: VerifyRegistrationDetailsDto;
  
    @ApiProperty()
    @IsString()
    userName: string;
  }

//   
class VerifyAuthenticationResponseDto {
    @ApiProperty()
    @IsString()
    authenticatorData: string;
  
    @ApiProperty()
    @IsString()
    clientDataJSON: string;
  
    @ApiProperty()
    @IsString()
    signature: string;
  
    @ApiProperty()
    @IsString()
    userHandle: string;
  }
  
  export class VerifyAuthenticationDto {
    @ApiProperty()
    @IsString()
    id: string;
  
    @ApiProperty()
    @IsString()
    rawId: string;
  
    @ApiProperty()
    response: VerifyAuthenticationResponseDto;
  
    @ApiProperty()
    @IsString()
    type: string;
  
    @ApiProperty()
    clientExtensionResults: ClientExtensionResultsDto;
  
    @ApiProperty()
    @IsString()
    authenticatorAttachment: string;
  
    @ApiProperty()
    @IsString()
    challangeId: string;
  }
  
  export class VerifyAuthenticationPayloadDto {
    @ApiProperty()
    verifyAuthenticationDetails: VerifyAuthenticationDto;
  
    @ApiProperty()
    @IsString()
    userName: string;
  }

  export class UpdateFidoUserDetailsDto {
    @ApiProperty()
    @IsString()
    userName: string;
  
    @ApiProperty()
    @IsString()
    credentialId: string;
  
    @ApiProperty()
    @IsString()
    deviceFriendlyName: string;
  }

  export class UserNameDto {
    @ApiProperty()
    @IsString()
    userName: string;
  }

  export class credentialDto {
    @ApiProperty()
    @IsString()
    credentialId: string;
  }

  export class updateDeviceDto {
    @ApiProperty()
    @IsString()
    credentialId: string;
    
    @ApiProperty()
    @IsString()
    deviceName: string;
  }
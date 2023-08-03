import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Invitation } from '@credebl/enum/enum';
import { Transform } from 'class-transformer';
import { trim } from '@credebl/common/cast.helper';

export class AcceptRejectInvitationDto {

    @ApiProperty({ example: 1 })
    @IsNotEmpty({ message: 'Please provide valid invitationId' })
    @IsNumber()
    invitationId: number;

    @ApiProperty({ example: 1 })
    @IsNotEmpty({ message: 'Please provide valid orgId' })
    @IsNumber()
    orgId: number;

    @ApiProperty({
        enum: [Invitation.ACCEPTED, Invitation.REJECTED]
    })
    @Transform(({ value }) => trim(value))
    @IsNotEmpty({ message: 'Please provide valid status' })
    @IsEnum(Invitation)
    status: Invitation.ACCEPTED | Invitation.REJECTED;

}

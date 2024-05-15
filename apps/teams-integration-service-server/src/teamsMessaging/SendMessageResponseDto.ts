import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class SendMessageResponseDto {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    message!: string;
}

export { SendMessageResponseDto as SendMessageResponseDto };
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class SendMessageDto {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    channelId!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    message!: string;
}

export { SendMessageDto as SendMessageDto };
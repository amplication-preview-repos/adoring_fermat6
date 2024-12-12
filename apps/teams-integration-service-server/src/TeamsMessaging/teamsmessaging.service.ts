import { Injectable } from "@nestjs/common";
import { SendMessageDto } from "../teamsMessaging/SendMessageDto";
import { SendMessageResponseDto } from "../teamsMessaging/SendMessageResponseDto";

@Injectable()
export class TeamsMessagingService {
  constructor() {}
  async SendTeamsMessage(args: SendMessageDto): Promise<SendMessageResponseDto> {
    throw new Error("Not implemented");
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TeamsMessagingService } from "./teamsmessaging.service";
import { SendMessageDto } from "../teamsMessaging/SendMessageDto";
import { SendMessageResponseDto } from "../teamsMessaging/SendMessageResponseDto";

@swagger.ApiTags("teamsMessagings")
@common.Controller("teamsMessagings")
export class TeamsMessagingController {
  constructor(protected readonly service: TeamsMessagingService) {}

  @common.Post("/send-teams-message")
  @swagger.ApiOkResponse({
    type: SendMessageResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendTeamsMessage(
    @common.Body()
    body: SendMessageDto
  ): Promise<SendMessageResponseDto> {
        return this.service.SendTeamsMessage(body);
      }
}

import { Module } from "@nestjs/common";
import { TeamsMessagingService } from "./teamsmessaging.service";
import { TeamsMessagingController } from "./teamsmessaging.controller";

@Module({
  controllers: [TeamsMessagingController],
  providers: [TeamsMessagingService],
  exports: [TeamsMessagingService],
})
export class TeamsMessagingModule {}

import { Module } from "@nestjs/common";
import { TeamModule } from "./team/team.module";
import { UserModule } from "./user/user.module";
import { MessageModule } from "./message/message.module";
import { LogModule } from "./log/log.module";
import { TeamsMessagingModule } from "./TeamsMessaging/teamsmessaging.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    TeamModule,
    UserModule,
    MessageModule,
    LogModule,
    TeamsMessagingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TableModule } from "./table/table.module";
import { DatabaseModule } from "./database.module";
import { ConfigModule } from "@nestjs/config";
import { environments } from "../config/enviroment";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || ".env",
      isGlobal: true
    }),
    DatabaseModule,
    TableModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

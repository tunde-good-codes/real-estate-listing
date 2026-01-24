import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoreModule } from "./core/core.module";
import { ListingModule } from "./modules/listing/listing.module";

@Module({
  imports: [CoreModule, ListingModule],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { ListingService } from "./listing.service";
import { ListingController } from "./listing.controller";
import { BullModule } from "@nestjs/bull";

@Module({
  imports: [BullModule.registerQueue({ name: "listing" })],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}

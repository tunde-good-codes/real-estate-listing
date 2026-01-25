import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import type { Queue } from "bull";

@Injectable()
export class ListingProducer {
  constructor(@InjectQueue(`listing`) private listingQueue: Queue) {}

  async createListingImage(image: Express.Multer.File) {
    return await this.listingQueue.add(`createListingImage`, image);
  }
}

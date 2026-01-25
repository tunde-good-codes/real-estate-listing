import { Process, Processor } from "@nestjs/bull";
import type { Job } from "bull";
import { LISTING_QUEUE } from "./queue.constant";

@Processor(LISTING_QUEUE)
export class ListingConsumer {
  @Process(`createListingImage`)
  createListingImage(job: Job<Express.Multer.File>) {
    console.log(`FILE PROCESSED ASYNC IN QUEUE:`, job.data.originalname);
    return job.data;
  }
}

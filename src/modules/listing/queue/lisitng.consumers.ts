import { Process, Processor } from "@nestjs/bull";
import type { Job } from "bull";
import { LISTING_QUEUE } from "./queue.constant";
import { BaseConsumer } from "src/core/queue/base.consumer";

@Processor(LISTING_QUEUE)
export class ListingConsumer extends BaseConsumer {
  @Process(`createListingImage`)
  createListingImage(job: Job<Express.Multer.File>) {
    console.log(`FILE PROCESSED ASYNC IN QUEUE:`, job.data.originalname);
    return job.data;
  }
}

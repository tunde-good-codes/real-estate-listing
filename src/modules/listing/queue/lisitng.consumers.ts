import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor(`listing`)
export class ListingConsumer {
  @Process(`createListingImage`)
  async createListingImage(job: Job<Express.Multer.File>) {
    console.log(`FILE PROCESSED ASYNC IN QUEUE:`, job.data.originalname);
    return job.data;
  }
}

import { Injectable } from "@nestjs/common";
import { CreateListingDto } from "./dto/create-listing.dto";

@Injectable()
export class ListingService {
  create(createListingDto: CreateListingDto) {
    return {
      message: "This action adds a new listing",
      data: createListingDto,
    };
  }
}

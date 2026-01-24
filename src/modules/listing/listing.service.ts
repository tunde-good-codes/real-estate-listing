import { Injectable } from "@nestjs/common";
import { CreateListingDto } from "./dto/create-listing.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ListingService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createListingDto: CreateListingDto) {
    return {
      message: "This action adds a new listing",
      data: createListingDto,
    };
  }
}

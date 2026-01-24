import { Injectable } from "@nestjs/common";
import { CreateListingDto } from "./dto/create-listing.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ListingService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createListingDto: CreateListingDto) {
    return await this.prismaService.listing.create({
      data: createListingDto,
    });
  }
}

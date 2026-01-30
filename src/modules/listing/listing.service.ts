import { Injectable } from "@nestjs/common";
import { CreateListingDto } from "./dto/create-listing.dto";
import { PrismaService } from "../../database/prisma.service";
import { ListingProducer } from "./queue/listing.producers";

@Injectable()
export class ListingService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly listingQueue: ListingProducer,
  ) {}

  async create({
    data,
    images,
  }: {
    data: CreateListingDto;
    images: Express.Multer.File[];
  }) {
    const listing = await this.prismaService.listing.create({
      data,
    });
    for (const image of images) {
      await this.listingQueue.uploadListingImage({
        base64File: `TODO`, // <-- we'll get to this next
        mimeType: image.mimetype,
        listingId: listing.id,
      });
    }
    return listing;
  }
}

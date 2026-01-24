import { Injectable } from "@nestjs/common";
import { CreateListingDto } from "./dto/create-listing.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ListingService {
  constructor(private readonly prismaService: PrismaService) {}
  async create({
    data,
    images,
  }: {
    data: CreateListingDto;
    images: Express.Multer.File[];
  }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.prismaService.listing.create({
      data,
    });
  }
}

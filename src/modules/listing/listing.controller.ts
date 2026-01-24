import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from "@nestjs/common";
import { ListingService } from "./listing.service";
import { CreateListingDto } from "./dto/create-listing.dto";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller("listing")
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  @UseInterceptors(FilesInterceptor("images"))
  create(
    @Body() createListingDto: CreateListingDto,
    @UploadedFiles() images: Express.Multer.File[]
  ) {
    return this.listingService.create(createListingDto, images);
  }
}

import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateListingDto {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsNotEmpty()
  addressLine1: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  addressLine2: string;

  @IsString()
  @IsNotEmpty()
  addressCity: string;

  @IsString()
  @IsNotEmpty()
  addressZipcode: string;

  @IsInt()
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  bathrooms: number;

  @IsInt()
  @Min(0)
  bedrooms: number;

  @IsInt()
  @Min(0)
  squareMeters: number;
}

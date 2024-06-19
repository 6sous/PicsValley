import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async uploadImage(file: Express.Multer.File, userId: string) {
    const result = await this.cloudinaryService.uploadFile(file);
    const imageUrl = result.secure_url;

    const image = await this.prisma.image.create({
      data: {
        url: imageUrl,
        userId: userId,
      },
    });

    return image;
  }

  async getOptimizedImageUrl(imageId: string) {
    const image = await this.prisma.image.findUnique({
      where: { id: imageId },
    });

    console.log(image);

    if (!image) {
      throw new Error('Image not found');
    }

    const cloudinaryUrl = new URL(image.url);

    const twicPicsUrl = `https://${process.env.TWICPICS_DOMAIN}${cloudinaryUrl.pathname}`;

    return twicPicsUrl;
  }
}

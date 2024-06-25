import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { GetCurrentUser } from 'src/auth/decorators/get-current-user.decorator';
// ... other imports

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @GetCurrentUser('sub') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new Error('Missing required parameter - file');
    }
    if (!userId) {
      throw new Error('Missing required parameter - userId');
    }

    return this.imageService.uploadImage(file, userId);
  }

  @Get(':id')
  async getOptimizedImage(@Param('id') id: string) {
    const optimizedUrl = await this.imageService.getOptimizedImageById(id);
    return { url: optimizedUrl };
  }

  @Get()
  async getAllImages() {
    const images = await this.imageService.getAllImages();
    return images;
  }
}

// import {
//   Controller,
//   Get,
//   Param,
//   Post,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { ImageService } from './image.service';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { GetCurrentUser } from 'src/auth/decorators/get-current-user.decorator';

// @Controller('image')
// export class ImageController {
//   constructor(private readonly imageService: ImageService) {}

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file'))
//   async uploadImage(
//     @UploadedFile() file: Express.Multer.File,
//     @GetCurrentUser('id') userId: string,
//   ) {
//     const image = await this.imageService.uploadImage(file, userId);
//     return { id: image.id, url: image.url };
//   }

//   @Get(':id')
//   async getOptimizedImage(@Param('id') id: string) {
//     const optimizedUrl = await this.imageService.getOptimizedImageUrl(id);
//     return { url: optimizedUrl };
//   }
// }

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
    const optimizedUrl = await this.imageService.getOptimizedImageUrl(id);
    return { url: optimizedUrl };
  }
}

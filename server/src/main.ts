import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [process.env.CORS_ORIGIN],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type', // Authorization header is not needed if using cookies
    credentials: true, // Allow cookies to be included in cross-origin requests
  };

  app.enableCors(corsOptions);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const formattedErrors = validationErrors.map((error) => {
          console.log(error);

          return {
            field: error.property,
            errors: Object.entries(error.constraints || {}).map(
              ([key, value]) => {
                return { rule: key, errorMessage: value };
              },
            ),
          };
        });
        return new BadRequestException({
          statusCode: 400,
          error: 'Bad Request',
          message: formattedErrors,
        });
      },
    }),
  );
  app.use(cookieParser());
  await app.listen(process.env.APP_PORT || 8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

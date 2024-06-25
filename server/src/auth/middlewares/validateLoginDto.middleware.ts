import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class ValidateLoginDtoMiddleware implements NestMiddleware {
  async use(req: Request, _res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const loginDto = new LoginDto();
    loginDto.username = username;
    loginDto.password = password;

    const errors = await validate(loginDto);
    if (errors.length > 0) {
      const errorMessage = errors.map((error) => {
        return {
          field: error.property,
          errors: Object.entries(error.constraints || {}).map(
            ([key, value]) => {
              return { rule: key, errorMessage: value };
            },
          ),
        };
      });
      throw new UnauthorizedException(errorMessage);
    }
    next();
  }
}

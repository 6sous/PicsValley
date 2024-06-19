import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshTokenAuthGuard extends AuthGuard('jwt-refresh') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.cookies.refresh_token) {
      throw new UnauthorizedException({
        message: 'Refresh token is missing',
      });
    }
    console.log(request.cookies);

    return super.canActivate(context);
  }
}

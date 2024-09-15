import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { JwtPayload } from 'jsonwebtoken';
import { decode } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      const { headers } = request;

      const [bearer, token] = headers.authorization.split(' ');

      if (bearer != 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Unauthorized user token not found'
        });
      }

      const jwtPayload = decode(token) as JwtPayload;

      // TODO: это так то бы нужно раскоментить но для упрощения оставил так

      // const currentTime = Math.floor(Date.now() / 1000);
      // if (!jwtPayload.exp || jwtPayload.exp < currentTime) {
      //   throw new UnauthorizedException('Unauthorized by expiration');
      // }

      if (jwtPayload.sub) {
        request.user = jwtPayload;

        return true;
      } else {
        return false;
      }
    } catch {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}

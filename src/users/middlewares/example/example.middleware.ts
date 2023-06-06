import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Example Middleware");
    console.log(req.headers.authorization);

    const {authorization} = req.headers;
    if(!authorization)
    throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
    if (authorization === 'letmein') next();
    else
    throw new HttpException('Invalid Authorization Token', HttpStatus.FORBIDDEN);


    next();
  }
}

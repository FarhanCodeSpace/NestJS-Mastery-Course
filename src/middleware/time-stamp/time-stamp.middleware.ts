import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TimeStampMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const timeStamp = new Date().toISOString();
    console.log(`[${timeStamp}]`)
  }
}

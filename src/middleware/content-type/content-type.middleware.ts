import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const contenType = req.headers['content-type'] 

    if(!contenType) {
      return res.status(400).json({message: "content-type is missing"})
    }

    if(contenType !== 'application/json') {
      return res.status(415).json({message: "Unsupported media type. Only application/json is supported"})
    }
    next();
  }
}

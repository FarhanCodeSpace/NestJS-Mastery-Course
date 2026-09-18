import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { classToClassFromExist } from 'class-transformer';
import { response } from 'express';
import { json } from 'node:stream/consumers';
import { Observable } from 'rxjs';
import { AppController } from '../../app.controller';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const [req, res] = context.getArgs();
    // console.log('Request Param: ', req.params.id, req.params.name);
    // console.log(res.statusCode);
    // console.log(req.query)
    // res.cookie('cookie', 'testCookieValue')
    // console.log('Headers', JSON.stringify(res.getHeaders(), null, 2))
    // const controller = context.getClass()
    // if(controller !== AppController) {
    //   throw new UnauthorizedException('This route is only accessible from App controller')
    // }

    const request = context.switchToHttp().getRequest();
    const apikey = request.headers?.api_key;

    const user = this.userService.getUsers(apikey);

    if (!user) {
      throw new UnauthorizedException('Invalid Api Key!');
    }
    request.user = user;
    return true;
  }
}

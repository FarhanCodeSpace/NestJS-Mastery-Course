import { Injectable, NestMiddleware } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import bcrypt from 'bcrypt';
import { UserDto } from '../../UserDTO/user.dto';

@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
 async use(req: any, res: any, next: () => void) {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.toUpperCase();
    }
    if (req.body && req.body.name && req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const createUserDto: UserDto = {
        name: req.body.name,
        password: hashedPassword,
        createdAt: new Date().toISOString()
      };
      this.userService.createUser(createUserDto)
    }
    next();
  }
}

import { Controller, Get, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { AuthGuard } from '../guards/auth/auth.guard';
import { Request } from 'express';
import { RoleGuard } from '../guards/role/role.guard';
import { Roles } from '../customDecorator/roles.decorator';
import { Role } from '../enum/roles.enum';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @UseGuards(RoleGuard)
  @Roles(Role.ADMIN)
  getUser(@Req() req: any) {
    const data = req.user
    const {apiKey, ...userData} = data
    return `${data.name} data: ${JSON.stringify(userData, null, 2)}`
  }
}

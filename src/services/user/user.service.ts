import { Injectable } from '@nestjs/common';
import { UserDto } from '../../UserDTO/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [];

  createUser(user: UserDto): void {
    this.users.push(user);
  }

  getAllUsers(): UserDto[] {
    return this.users;
  }
}

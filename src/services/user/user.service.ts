import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      apiKey: 'userA101',
      name: 'userA',
      email: 'userA@example.com',
    },
    {
      apiKey: 'userB102',
      name: 'userB',
      email: 'userB@example.com',
    },
    {
      apiKey: 'userC103',
      name: 'userC',
      email: 'userC@example.com',
    },
  ];

  getUsers(apikey: string) {
    return this.users.find((user) => user.apiKey === apikey);
  }
}

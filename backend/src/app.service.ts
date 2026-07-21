import { Injectable } from '@nestjs/common';
import data from './data.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Stevhen!';
  }

  getHelloById(id: string): string {
    const user = data.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return `Hello ${user.name}`;
  }

  getUserById(id: string) {
    const user = data.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

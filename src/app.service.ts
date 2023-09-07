import { Injectable } from '@nestjs/common';

export type SaySometing = {
  message: string;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  saySometing(): SaySometing {
    return {
      message: 'Hello world',
    };
  }
  getHelloPost(body: any): string {
    return body;
  }
}

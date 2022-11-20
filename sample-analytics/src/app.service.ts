import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - ANALYTICS', data);
    this.analytics.push({
      liquidName: data.liquidName,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}

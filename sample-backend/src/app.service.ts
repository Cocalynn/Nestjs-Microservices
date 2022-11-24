import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';


@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World from backend!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.liquidName, createUserRequest.profilePictureIdentifier),
    );
    this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.liquidName, createUserRequest.profilePictureIdentifier),
    );
  }

  getUsers() {

    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
    
  }

}

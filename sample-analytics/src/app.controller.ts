import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';
import { User } from './user.models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();}

  @EventPattern('user_created')
  handleUserCreated(@Body() userDto: User) {
    this.appService.handleUserCreated(userDto);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  async getUsers() {
    console.log('received the data requirements from sample-backend')
    this.appService.getUsers();
  }
}

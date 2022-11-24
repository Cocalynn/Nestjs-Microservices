import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { User, UserDocument} from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AppService {
  //private readonly analytics: any[] = [];
  constructor(
    @InjectModel('user') private userModel: Model<UserDocument>,
    ){}
  
  getHello(): string {
    return 'Hello World from analytics!';
  }

  async handleUserCreated(user: User): Promise<User> {
    console.log('a new user is created: ', user)
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async getUsers(): Promise<User> {
    console.log('received the data requirements from sample-analytics app.controller');
    return this.userModel.find({})
    .then(users =>{
      console.log(users)
      return users
    })
    .catch(err => {return err});
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { User, UserDocument} from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AppService {
  //private readonly analytics: any[] = [];
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    ){}
  
  handleUserCreated(user: User): Promise<User> {
    console.log('a new user is created: ', user)
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find({})
    .then(users =>{return users})
    .catch(err => {return err});
  }
}

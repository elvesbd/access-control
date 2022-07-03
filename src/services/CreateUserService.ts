import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { EncryptUtils } from '../shared/encrypt.util';

type UserType = {
  name: string;
  username: string;
  password: string;
};

class CreateUserService {
  async execute(data: UserType): Promise<Partial<User> | Error> {
    const passwordHash = await EncryptUtils.hashPassword(data.password);

    const userData = {
      name: data.name,
      username: data.username,
      password: passwordHash,
    };

    const newUser = await UserRepository.createUser(userData);

    if (!newUser) {
      return new Error(`User not created.`);
    }
    const { password, ...user } = newUser;
    return user;
  }
}

export default new CreateUserService();

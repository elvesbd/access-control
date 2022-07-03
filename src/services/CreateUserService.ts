import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

type UserType = {
  name: string;
  username: string;
  password: string;
};

class CreateUserService {
  async execute(user: UserType): Promise<User | Error> {
    const userRepository = new UserRepository();

    if (await userRepository.findOneUser(user.username)) {
      return new Error(`User ${user.username} already exists`);
    }

    return userRepository.createUser(user);
  }
}

export default new CreateUserService();

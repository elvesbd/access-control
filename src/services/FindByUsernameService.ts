import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';

class FindByUsernameService {
  async execute(username: string): Promise<User | Error | null> {
    const userExists = await UserRepository.findByUsername(username);

    if (userExists) {
      return new Error(`User ${username} already exists`);
    }
    return userExists;
  }
}

export default new FindByUsernameService();

import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';

class FindOneUserService {
  async execute(username: string): Promise<User | null> {
    return UserRepository.findOneUser(username);
  }
}

export default new FindOneUserService();

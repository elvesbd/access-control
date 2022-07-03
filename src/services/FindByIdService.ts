import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';

class FindByIdService {
  async execute(id: string): Promise<Partial<User> | Error | null> {
    const userExists = await UserRepository.findById(id);

    if (!userExists) {
      return new Error(`User with ${id} not found`);
    }
    const { password, ...user } = userExists;
    return user;
  }
}

export default new FindByIdService();

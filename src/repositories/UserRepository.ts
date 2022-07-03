import { User } from '../models/User';
import { dataSource } from '../shared/infra/typeorm';

type UserType = {
  name: string;
  username: string;
  password: string;
};

class UserRepository {
  async createUser(user: UserType): Promise<User> {
    const usersRepository = dataSource.getRepository(User);

    const newUser = usersRepository.create(user);
    return usersRepository.save(newUser);
  }

  async findByUsername(username: string): Promise<User | null> {
    const usersRepository = dataSource.getRepository(User);

    return usersRepository.findOne({
      where: {
        username,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    console.log('findById', id);
    const usersRepository = dataSource.getRepository(User);

    return usersRepository.findOneBy({ id });
  }
}

export default new UserRepository();

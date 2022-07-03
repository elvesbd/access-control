/* import UserController from '../controllers/UserController';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserService } from '../services/CreateUserService';
import { FindOneUserService } from '../services/FindOneUserService';

export const userFactory = (): UserController => {
  const userRepository = new UserRepository();

  const createUserService = new CreateUserService(userRepository);
  const findOneUserService = new FindOneUserService(userRepository);

  return new UserController(createUserService, findOneUserService);
};
 */

import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import FindOneUserService from '../services/FindOneUserService';

class UserController {
  async createUser(request: Request, response: Response) {
    try {
      const { name, username, password } = request.body;

      if (!name) {
        return response.status(400).json({ error: 'Name is required' });
      }

      if (!username) {
        return response.status(400).json({ error: 'Username is required' });
      }

      if (!password) {
        return response.status(400).json({ error: 'Password is required' });
      }

      const userExists = await FindOneUserService.execute(username);
      if (userExists instanceof Error) {
        return response.status(400).json({ error: userExists.message });
      }

      const user = await CreateUserService.execute({
        name,
        username,
        password,
      });
      if (user instanceof Error) {
        return response.status(400).json({ error: user.message });
      }

      return response.json(user);
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Falha na criação do usuario' });
    }
  }
}

export default new UserController();

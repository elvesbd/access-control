import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import FindOneUserService from '../services/FindOneUserService';

class UserController {
  async createUser(request: Request, response: Response) {
    try {
      const { name, username, password } = request.body;

      if (username) {
        const userExists = await FindOneUserService.execute(username);
        if (userExists) {
          return response
            .status(400)
            .json({ error: `User ${username} already exists` });
        }
      }

      const user = await CreateUserService.execute({
        name,
        username,
        password,
      });
      response.status(201).json(user);
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Falha na criação do usuario' });
    }
  }
}

export default new UserController();

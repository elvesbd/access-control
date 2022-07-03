import { DataSource } from 'typeorm';
import { User } from '../../../models/User';
import { CreateUsers1656776089249 } from './migrations/1656776089249-CreateUsers';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'permission',
  //synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [CreateUsers1656776089249],
});

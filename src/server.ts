import { app } from './app';
import { dataSource } from './shared/infra/typeorm';

dataSource
  .initialize()
  .then(() => {
    app.listen(3333, () => console.log('listening on port 3333'));
  })
  .catch(error => console.log(error));

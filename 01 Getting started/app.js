import http from 'http';
import { routes } from './routes.js';

const server = http.createServer(routes);

const port = 8000;
server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

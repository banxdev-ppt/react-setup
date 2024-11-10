import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes/publicRoutes';
import { privateRoutes } from './routes/privateRoutes/privateRoutes';

export const routers = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes
]);

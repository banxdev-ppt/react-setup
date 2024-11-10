import { ReactNode } from 'react';

export interface IRoutes {
  path: string;
  name: string;
  element?: ReactNode;
  children?: IRoute[];
}

export interface IRoute {
  path: string;
  name: string;
  element?: ReactNode;
}

export interface IPrivateRoute {
  children: ReactNode;
}

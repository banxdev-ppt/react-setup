import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { routers } from './routers/routers';
import "@/styles/global.css";

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers} />,
);

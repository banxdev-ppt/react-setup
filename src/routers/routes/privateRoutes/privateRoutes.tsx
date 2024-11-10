import PrivateRoute from "@/routers/privateRoutes";
import MainPrivateLayout from "@/layouts/MainPrivateLayout";
import MainHome from "@/views/privates/home/MainHome";
import { productRoutes } from "../productRoutes";

export const privateRoutes = [
  {
    element: <PrivateRoute><MainPrivateLayout /></PrivateRoute>
    ,
    children: [
      { index: true, path: '/', name: "หน้าหลัก", element: <MainHome /> },
      ...productRoutes,
    ],
  },
];
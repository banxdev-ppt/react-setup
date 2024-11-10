import { IRoutes } from "@/types/global";
import MainLogin from "@/views/public/authenticate/login-auth/MainLogin";
import MainRegister from "@/views/public/authenticate/register-auth/MainRegister";
import ErrorPage from "@/views/public/not-found/ErrorPage";

export const publicRoutes: IRoutes[] = [
  { path: '/login', name: "เข้าสู่ระบบ", element: <MainLogin /> },
  { path: '/register', name: "ลงทะเบียน", element: <MainRegister /> },
  { path: '*', name: "เกิดข้อผิดพลาด", element: <ErrorPage /> },
];
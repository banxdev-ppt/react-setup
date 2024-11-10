import { IRoutes } from '@/types/global';
import FormProducts from '@/views/privates/products/form/FormProducts';
import MainProducts from '@/views/privates/products/MainProducts';

export const productRoutes: IRoutes[] = [
  {
    path: '/products',
    name: 'รายการสินค้า',
    element: <MainProducts />,
    children: [
      { path: '/products/create', name: 'เพิ่มรายการสินค้า', element: <FormProducts /> },
      { path: '/products/update/:id', name: 'แก้ไขรายการสินค้า', element: <FormProducts /> },
    ]
  }
];
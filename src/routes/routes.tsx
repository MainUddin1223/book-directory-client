import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
// import PrivateRoutes from './privateRoute'

import Login from '@/pages/login'
import Register from '@/pages/register'
import Home from '@/pages/Home'
import AddBook from '@/pages/addBook'
import PrivateRoutes from './privateRoute'
import UpdateBook from '@/pages/updateBook'





const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      }
      // {
      //   path: '/product-details/:id',
      //   element: <ProductDetails />,
      // },
      // {
      //   path: '/checkout',
      //   element: <PrivateRoutes><Checkout /></PrivateRoutes>,
      // },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/add-book',
    element: <PrivateRoutes><AddBook/></PrivateRoutes>,
  },
  {
    path: '/update-book',
    element: <PrivateRoutes><UpdateBook/></PrivateRoutes>,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;

import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import PrivateRoutes from './privateRoute'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      // {
      //   path: '/products',
      //   element: <Products />,
      // },
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
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;

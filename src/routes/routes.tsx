import { createBrowserRouter } from 'react-router-dom';
import App from '@/App'


import Login from '@/pages/login'
import Register from '@/pages/register'
import Home from '@/pages/Home'
import AddBook from '@/pages/addBook'
import PrivateRoutes from './privateRoute'
import UpdateBook from '@/pages/updateBook'
import MyBookList from '@/pages/myBooklist'
import EditBook from '@/pages/editBook'
import SavedList from '@/pages/savedList'
import WishList from '@/pages/wishList'






const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/add-book',
        element: <PrivateRoutes><AddBook/></PrivateRoutes>,
      },
      {
        path: '/update-book',
        element: <PrivateRoutes><UpdateBook/></PrivateRoutes>,
      },
      {
        path: '/my-books',
        element: <PrivateRoutes><MyBookList/></PrivateRoutes>,
      },
      {
        path: 'book/:id',
        element: <PrivateRoutes><EditBook/></PrivateRoutes>,
      },
      {
        path: '/saved-list',
        element:  <PrivateRoutes><SavedList/></PrivateRoutes>,
      },
      {
        path: '/wish-list',
        element: <PrivateRoutes><WishList /></PrivateRoutes>,
      },
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
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;

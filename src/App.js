import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Shop from './Components/Products/Shop/Shop';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Forget from './Components/Forget/Forget';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact';
import NotFoud from './Components/NotFound/NotFoud';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/product',
          element: <PrivateRoute><Shop></Shop></PrivateRoute>,
          loader: async () => {
            return fetch('product.json')
          }
        },
        {
          path: '/registration',
          element: <Register></Register>
        },
        {
          path: '/signin',
          element: <Login></Login>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/forget-password',
          element: <Forget></Forget>
        },
      ]
    },
    {
      path: '*',
      element: <NotFoud></NotFoud>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter as Router,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Account from './Pages/Account';
import Home from './Pages/Home';
import './index.css';
import Demo from './Pages/Demo';
import Login from './Pages/Login';

const router = Router([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/demo',
        element: <Demo />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

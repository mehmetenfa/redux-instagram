import AuthLayout from "pages/auth";
import Home from "pages/Home";
import Login from "pages/login";

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: true
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
];

export default routes;

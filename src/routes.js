import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import AuthLayout from "pages/auth";

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
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]

const authCheck = routes => routes.map(route => {
  if (route?.auth) {
    route.element = <PrivateRoute>{route.element}</PrivateRoute>
  }
  if (route?.children) {
    route.children = authCheck(route.children)
  }

  return route

})

export default authCheck(routes);

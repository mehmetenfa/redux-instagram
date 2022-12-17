import PrivateRoute from "components/PrivateRoute";
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
]

const authCheck = routes => routes.map(route => {
  if (route?.auth) {
    route.elemen = <PrivateRoute>{route.element}</PrivateRoute>
  }
})

export default routes;

import Home from "pages/Home";
import Login from "pages/login";

const routes = [
  {
    path: "./",
    elemen: <Home />,
  },
  {
    path: 'login',
    element: <Login />
  }
];

export default routes;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Login, Product, Products, User, Users } from "./pages";
import { Footer, Menu, Navbar } from "./components";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div>
          <Navbar />
          <div className="container">
            <div className="menu-container">
              <Menu />
            </div>
            <div className="content-container">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

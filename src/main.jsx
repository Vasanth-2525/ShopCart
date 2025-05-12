import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from './Blog/Blog.jsx';
import Home from "./Home/Home.jsx";
import Shop from "./Shop/Shop.jsx";
import SingleProduct from "./Shop/SingleProduct.jsx";
import CartPage from "./Shop/CartPage.jsx";
import CheckOutPage from "./Shop/CheckOutPage.jsx";
import SingleBlog from "./Blog/SingleBlog.jsx";
import About from "./About/About.jsx";
import Contact from "./ContactPage/Contact.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import { StoreProvider } from "./Context/StoreContext.jsx"; // ✅ Import StoreContext
import Login from "./Component/Login.jsx";
import PrivateRoute from "./PrivateRouter/PrivateRout.jsx";
import Signup from "./Component/Singup.jsx"; // ✅ Fixed casing: Singup -> Signup
import AddFavCart from "./Shop/AddFavCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <SingleBlog /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      {
        path: "/cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/add-fav-cart", element: <AddFavCart /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </AuthProvider>
  </React.StrictMode>
);

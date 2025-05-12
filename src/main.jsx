import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Pages & Components
import Home from "./Home/Home.jsx";
import Blog from "./Blog/Blog.jsx";
import SingleBlog from "./Blog/SingleBlog.jsx";
import Shop from "./Shop/Shop.jsx";
import SingleProduct from "./Shop/SingleProduct.jsx";
import CartPage from "./Shop/CartPage.jsx";
import CheckOutPage from "./Shop/CheckOutPage.jsx";
import About from "./About/About.jsx";
import Contact from "./ContactPage/Contact.jsx";
import Login from "./Component/Login.jsx";
import Signup from "./Component/Singup.jsx";
import AddFavCart from "./Shop/AddFavCart.jsx";
import PrivateRoute from "./PrivateRouter/PrivateRout.jsx";
import ErrorPage from "./Component/ErrorPage.jsx"; // ✅ Optional: Create a custom error page

// Context Providers
import AuthProvider from "./Context/AuthProvider.jsx";
import { StoreProvider } from "./Context/StoreContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // ✅ Handles any routing errors
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProduct /> },
      {
        path: "cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      { path: "checkout", element: <CheckOutPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "add-fav-cart", element: <AddFavCart /> },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
],
{
  basename: "/Vasanth-2525/ShopCart",
}
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </AuthProvider>
  </React.StrictMode>
);

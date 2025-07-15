import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// Layout Component for Navbar + Outlet (This is important!)
const Layout = ({ setShowLogin }) => {
  return (
    <>
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
      </div>
      <Outlet />  {/* This renders the current route's page */}
      <Footer />
    </>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setShowLogin={setShowLogin} />, // Wrap pages inside Layout
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/order", element: <PlaceOrder /> },
      ],
    },
  ]);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/MyCart/Cart.jsx";
import NotFound from "./Pages/NotFound/NotFound";
import Reservation from "./Pages/Booking/Reservation.jsx";
import Success from "./Pages/Success/Success";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Toaster /> {/* Toast Working Everywhere */}
      </Router>
    </>
  );
};

export default App;

import { useState } from "react";
import Navbar from "./components/Navbar"
import { Route, Routes, useLocation } from "react-router-dom";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Home from "./pages/Home";
import MyBookings from "./pages/MyBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
    </>
  )
}

export default App
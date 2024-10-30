import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RentalListing from "./pages/RentalListing";
import RentalApplications from "./pages/RentalApplications";
import TenentScreening from "./pages/TenentScreening";
import CreditAndBackgroundCheck from "./pages/CreditAndBackgroundCheck";
import OnlineRentCollection from "./pages/OnlineRentCollection";
import MaintenanceTracking from "./pages/MaintenanceTracking";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/rental-listing" element={<RentalListing />}></Route>
        <Route path="/online-rental-applications" element={<RentalApplications />}></Route>
        <Route path="/online-tenant-screening" element={<TenentScreening />}></Route>
        <Route path="/credit-and-background-check" element={<CreditAndBackgroundCheck />}></Route>
        <Route path="/online-rent-collection" element={<OnlineRentCollection />}></Route>
        <Route path="/maintenance-tracking" element={<MaintenanceTracking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

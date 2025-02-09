import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Checkout, Store } from "../pages"
import HomeHorizontal from "../components/container/HomeHorizontal";
import Pages from "../pages/Pages";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />          {/* Halaman Home */}
        <Route path="/store" element={<Store />} />    {/* Halaman Store */}
        <Route path="/checkout" element={<Checkout />} /> {/* Halaman Checkout */}
        <Route path="/test" element={<Pages />} /> {/* Halaman Test */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
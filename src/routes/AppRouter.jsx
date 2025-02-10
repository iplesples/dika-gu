import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Volcom, QuickSilver, SpideBlitz, CaraOrder } from "../pages"





const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />          {/* Halaman Home */}
        <Route path="/volcom" element={<Volcom />} />    {/* Halaman Volcom */}
        <Route path="/quicksilver" element={<QuickSilver />} /> {/* Halaman Quick silver */}
        <Route path="/spiderblitz" element={<SpideBlitz />} /> {/* halaman Spider blitz */}
        <Route path="/caraorder" element={<CaraOrder />} /> {/* halaman cara order */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
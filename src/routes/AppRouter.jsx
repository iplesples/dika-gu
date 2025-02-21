import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, UserDashboard, ProductList, Login, Register,ProductDetail} from "../pages"
import ProtectedRoute from "../components/ProtectedRoute";
import { Greeting } from "../components/UI";
import Navbar from "../components/widget/Navbar";





const AppRouter = () => {
  
  return (
    <Router>
      <Greeting />
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
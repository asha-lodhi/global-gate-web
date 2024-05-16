// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import ProductDetails from "./pages/productDetails";
import SellerAccount from "./pages/sellerAccount";
import AddProduct from "./pages/addProduct";
import CompanyDetails from "./component/companyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/become-seller" element={<SellerAccount />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/company-details" element={<CompanyDetails />} />
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

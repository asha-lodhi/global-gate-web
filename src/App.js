// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import ProductDetails from "./pages/productDetails";
import SellerAccount from "./pages/sellerAccount";
import AddProduct from "./pages/addProduct";
import CompanyDetails from "./component/companyDetails";
import CompanyProfile from "./pages/companyProfile";
import Layout from "./component/layout";
import CompanyAnalytic from "./component/companyAnalytic";
import Trends from "./component/trends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/become-seller" element={<SellerAccount />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route
            path="/company-details/:companyID"
            element={<CompanyDetails />}
          />
          <Route
            path="/company-profile/:companyID"
            element={<CompanyProfile />}
          />
          <Route path="/" element={<DashBoard />} />
          <Route path="/company-analytic" element={<CompanyAnalytic />} />
          <Route path="/trends" element={<Trends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

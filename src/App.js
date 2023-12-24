import Home from "./pages/Home";
import Store from "./pages/Store";
import Details from "./components/Details";
import Header from "./Layout/Header";
import './css/main.css';
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Footer from "./Layout/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Store" element={<Store/>}/>
        <Route path="product/:proudctId" element={<Details />} />
        <Route path="/products/category/:categoryName" element={<Category />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

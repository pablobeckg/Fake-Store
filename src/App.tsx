import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header/Header";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

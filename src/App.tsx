import { Route, Routes } from "react-router-dom";
import Header from "./component/common/Header";
import Home from "./component/Home/Home";
import ProductList from "./component/ProductList/ProductList";
import ProductDetails from "./component/ProductDetail/ProductDetails";
import Login from "./component/page/Login";
import Register from "./component/page/Register";
import About from "./component/page/About";
import Cart from "./component/Cart/Cart";
// import Cart1 from "./component/Cart1/Cart";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Cart/:id" element={<Cart/>} />
          {/* <Route path="/Cart1/:id" element={<Cart1/>} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;

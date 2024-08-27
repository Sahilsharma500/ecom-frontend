import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewsLetter from "./components/Home/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import Category from "./components/Category/Category";
import Search from "./components/Header/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
      <AppContext>
      <Header />
      {/* <SingleProduct /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path = "/contact" element={<Contact />} />
          <Route path="/products/:id" element={<SingleProduct />}/>
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/search" element={<Search />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Products from "./components/products/Products";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Products />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

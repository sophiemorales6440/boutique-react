import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductCard product={products[0]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
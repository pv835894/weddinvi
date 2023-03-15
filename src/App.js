import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

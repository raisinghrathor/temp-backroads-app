import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Tours from "./Components/Tours";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About />

      <Services />

      <Tours />
      <Footer />
    </>
  );
}

export default App;

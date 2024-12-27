import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Projects/>
      <Features/>
      <Gallery/>
      <Testimonials/>
      <Footer/>

    </>
  );
}

export default App;

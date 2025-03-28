import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Deals } from "./components/Deals";
import { Analysis } from "./components/Analysis";
import { Testimonials } from "./components/Testimonials";
import { ContactPage } from "./components/ContactPage";
import { Header } from "./components/Header";
import { Footer } from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

const MainPage = () => {
  return (
    <div>
      {/* Make sure these section IDs exactly match the 'to' attributes in the Header Links */}
      <section id="home">
        <Home />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="deals">
        <Deals />
      </section>
      <section id="analysis">
        <Analysis />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
};

export default App;

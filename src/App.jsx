import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";

const FOOTER_LIST_HEADERS = {
  Links: ["Inicio"],
  Contacto: ["E-mail"],
  Ejercicios: ["Lectura"],
  Juegos: ["Mentales"],
};

const NAV_LINKS = [
  {
    text: "Contacto",
    url: "/contacto",
  },
];

function App() {
  return (
    <>
      <Header navLinks={NAV_LINKS} />
      <MainContent />
      <Footer footerLinkList={FOOTER_LIST_HEADERS} />
    </>
  );
}

export default App;

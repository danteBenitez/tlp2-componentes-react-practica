import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Footer } from './components/Footer'
import Header from './components/Header'
import { MainContent } from './components/MainContent'

const FOOTER_LIST_HEADERS = {
    Links: ['Inicio'],
    Contacto: ['E-mail'],
    Ejercicios: ['Lectura'],
    Juegos: ['Mentales'],
}

const NAV_LINKS = [
  {
    text: "Contacto",
    url: "/contacto"
  }
]

function App() {
    return (
        <>
            <Header navLinks={NAV_LINKS} />
            <MainContent />
            <Footer footerLinkList={FOOTER_LIST_HEADERS} />
        </>
    )
}

export default App

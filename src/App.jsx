import Navbar from './Components/NavBar';
import Header from './Components/Header';
import FAQ from './Components/FAQ';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Sobre from './Components/Sobre';
import Terapias from './Components/Terapias';
import ModalAgendamento from './Components/ModalAgendamento';
import './App.css'

export default function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Sobre />
      <Terapias />
      {/* <FAQ /> */}
      <Contato />
      <Footer />
      {/* <ModalAgendamento /> */}
    </>
  )
}

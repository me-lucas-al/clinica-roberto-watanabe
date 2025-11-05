import Navbar from './components/NavBar'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Terapias from './components/Terapias'
import FAQ from './components/FAQ'
import Contato from './components/Contato'
import Footer from './components/Footer'
import AgendamentoModal from './components/ModalAgendamento'

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sobre />
      <Terapias />
      <FAQ />
      <Contato />
      <Footer />
      <AgendamentoModal />
    </>
  )
}
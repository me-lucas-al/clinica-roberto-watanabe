import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import Terapias from "../components/Terapias";
import FAQ from "../components/FAQ";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import AgendamentoModal from "../components/ModalAgendamento";

export default function Home() {
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
  );
}

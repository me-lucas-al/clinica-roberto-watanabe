import imgLogo from '../../assets/favicon.ico'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#243b2a] flex items-center justify-around py-6 fixed top-0 z-[1000]">
      <div className="flex items-center gap-2.5">
        <img className="w-7 h-7" src={imgLogo} alt="Logo" />
        <p className="font-['Poppins',_sans-serif] text-base text-[#d9b43a] m-0">Roberto Watanabe</p>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#header" className="text-[#f5f5f5] font-['Poppins',_sans-serif] text-[15px] no-underline transition-colors duration-300 ease-in-out hover:text-[#d9b43a]">Início</a>
        <a href="#sobre" className="text-[#f5f5f5] font-['Poppins',_sans-serif] text-[15px] no-underline transition-colors duration-300 ease-in-out hover:text-[#d9b43a]">Sobre</a>
        <a href="#terapias" className="text-[#f5f5f5] font-['Poppins',_sans-serif] text-[15px] no-underline transition-colors duration-300 ease-in-out hover:text-[#d9b43a]">Terapias</a>
        <a href="#faq" className="text-[#f5f5f5] font-['Poppins',_sans-serif] text-[15px] no-underline transition-colors duration-300 ease-in-out hover:text-[#d9b43a]">Perguntas Frequentes</a>
        <a href="#contato" className="text-[#f5f5f5] font-['Poppins',_sans-serif] text-[15px] no-underline transition-colors duration-300 ease-in-out hover:text-[#d9b43a]">Contato</a>

        <div>
          <button type="button" className="text-white">Trocar Tema</button>
        </div>

        <button className="bg-[#d9b43a] text-[#243b2a] border-none rounded-full py-2 px-5 cursor-pointer font-['Poppins',_sans-serif] transition-all duration-300 ease-in-out hover:bg-[#b38e24] hover:scale-105">Agendar</button>
      </nav>
    </nav>
  );
}
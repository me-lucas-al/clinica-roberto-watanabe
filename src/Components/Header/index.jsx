import imgLogo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="w-full h-[80vh] bg-gradient-to-r from-[#009b3a] to-[#1e402d] flex items-center justify-center text-center pt-20" id="header">
      <div className="flex flex-col items-center justify-center gap-2 text-white">
        <img src={imgLogo} alt="Logomarca da clínica" className="w-[200px] h-[200px] [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.3))]" />
        <h1 className="font-['Poppins',_sans-serif] text-[2.6rem] font-semibold text-[#dfe6e9] m-0">Roberto Watanabe</h1>
        <p className="font-['Poppins',_sans-serif] text-[1.4rem] tracking-[2px] text-[#d9b43a] m-0">CLÍNICA HOLÍSTICA</p>
      </div>
    </header>
  );
}
import imgLogo from '../../assets/logo.png'

export default function Header() {
  return (
    <header
      className="bg-gradient-to-r from-green-600 via-tema2 to-green-900 h-[500px] flex flex-col justify-center items-center text-center relative overflow-hidden pt-16"
      id="header"
    >
      <div className="relative z-[2]">
        <img src={imgLogo} alt="Logomarca da clínica" className="w-[200px] h-[200px] mb-[10px] mx-auto" />
        <h1 className="text-gray-300 text-4xl mb-2 font-semibold md:text-4xl">Roberto Watanabe</h1>
        <p className="text-tema text-2xl mb-10 uppercase tracking-[2px]">Clínica Holística</p>
      </div>
    </header>
  )
}
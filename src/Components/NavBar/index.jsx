import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { ModalAgendamento } from '../ModalAgendamento/index.jsx'
import { ThemeToggle } from '../Theme/index.jsx'
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-white hover:text-tema font-bold transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-tema transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </a>
  )

  const MobileNavLink = ({ href, children }) => (
    <SheetClose asChild>
      <a
        href={href}
        className="block px-3 py-2 text-white hover:text-tema hover:bg-tema/10 rounded-md transition-colors duration-300"
      >
        {children}
      </a>
    </SheetClose>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 header-gradient backdrop-blur-md border-b border-tema/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-tema font-semibold text-lg">Roberto Watanabe</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#header">Início</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#terapias">Terapias</NavLink>
            <NavLink href="#questions">Perguntas</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <ThemeToggle />
            <ModalAgendamento>
              <button className="bg-tema cursor-pointer hover:bg-tema/80 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Agendar
              </button>
            </ModalAgendamento>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <div className="md:hidden flex items-center space-x-3">
              <div className="scale-75">
                <ThemeToggle />
              </div>
              <SheetTrigger asChild>
                <button className="text-white hover:text-tema transition-colors duration-300">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
            </div>
            
            <SheetContent side="right" className="bg-tema2/95 backdrop-blur-md border-l border-tema/20 pt-16">
              <nav className="flex flex-col space-y-2">
                <MobileNavLink href="#header">Início</MobileNavLink>
                <MobileNavLink href="#sobre">Sobre</MobileNavLink>
                <MobileNavLink href="#terapias">Terapias</MobileNavLink>
                <MobileNavLink href="#questions">Perguntas</MobileNavLink>
                <MobileNavLink href="#contato">Contato</MobileNavLink>
                <ModalAgendamento>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full mt-4 bg-tema hover:bg-tema/80 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                  >
                    Agendar Consulta
                  </button>
                </ModalAgendamento>
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useModal } from '../../context/modal-context.jsx'
import { ThemeToggle } from '../Theme/index.jsx'
import logo from '../../assets/logo.png'
import styles from './navbar.module.css'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
   const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openModal } = useModal()

  const handleOpenAgendaModal = () => {
    openModal()
  }

  const handleMobileMenuAgenda = () => {
    openModal()
    setIsMobileMenuOpen(false)
  }

  const NavLink = ({ href, children }) => (
    <a href={href} className={styles.navLink}>
      {children}
      <span className={styles.navLinkUnderline}></span>
    </a>
  )

  const MobileNavLink = ({ href, children }) => (
    <a
      href={href}
      className={styles.mobileNavLink}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </a>
  )

  return (
    <nav className={`${styles.navbar} header-gradient`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <span className={styles.logoText}>Roberto Watanabe</span>
          </div>

          <div className={styles.desktopNav}>
            <NavLink href="#header">Início</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#terapias">Terapias</NavLink>
            <NavLink href="#questions">Perguntas</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <ThemeToggle />
            <button
              onClick={handleOpenAgendaModal}
              className={styles.agendaButton}
            >
              Agendar
            </button>
             <button
              onClick={() => navigate("/login")}
              className={styles.loginButton}
            >
              Login
            </button>

          </div>

          <div className={styles.mobileNavTrigger}>
            <div className={styles.mobileThemeToggle}>
              <ThemeToggle />
            </div>
            <button
              className={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={styles.mobileMenuBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className={styles.mobileNavLinks}>
              <MobileNavLink href="#header">Início</MobileNavLink>
              <MobileNavLink href="#sobre">Sobre</MobileNavLink>
              <MobileNavLink href="#terapias">Terapias</MobileNavLink>
              <MobileNavLink href="#questions">Perguntas</MobileNavLink>
              <MobileNavLink href="#contato">Contato</MobileNavLink>
              <button
                onClick={handleMobileMenuAgenda}
                className={styles.mobileAgendaButton}
              >
                Agendar Consulta
              </button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}
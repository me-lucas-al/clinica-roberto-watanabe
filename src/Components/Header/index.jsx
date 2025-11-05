import imgLogo from '../../assets/logo.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={`${styles.header} header-gradient`} id="header">
      <div className={styles.content}>
        <img
          src={imgLogo}
          alt="Logomarca da clínica"
          className={styles.logo}
        />
        <h1 className={styles.title}>Roberto Watanabe</h1>
        <p className={styles.subtitle}>Clínica Holística</p>
      </div>
    </header>
  )
}
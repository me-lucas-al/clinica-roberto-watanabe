import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from '../../context/theme-context.jsx'
import styles from './theme.module.css'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      onClick={toggleTheme}
      className={`${styles.toggleContainer} ${
        theme === 'dark' ? styles.dark : ''
      }`}
    >
      <SunIcon
        className={`${styles.icon} ${styles.sun} ${
          theme === 'light' ? styles.visible : ''
        }`}
      />
      <MoonIcon
        className={`${styles.icon} ${styles.moon} ${
          theme === 'dark' ? styles.visible : ''
        }`}
      />
    </div>
  )
}
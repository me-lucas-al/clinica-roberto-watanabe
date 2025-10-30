import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from '../../context/theme-context.jsx'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-15 h-7.5 bg-gray-300 dark:bg-tema rounded-full cursor-pointer transition-all duration-300 border-2 border-gray-300 dark:border-tema"
    >
      {theme === 'light' ? (
        <SunIcon className="absolute top-1/2 left-1.5 -translate-y-1/2 w-4 h-4 text-white dark:opacity-30 transition-opacity duration-300" />
      ) : (
        <MoonIcon className="absolute top-1/2 right-1.5 -translate-y-1/2 w-4 h-4 text-white opacity-30 dark:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  )
}
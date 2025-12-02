import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/theme-provider.jsx'
import { ModalProvider } from './context/modal-context.jsx'
import { UserProvider } from './context/user-context.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="clinica-theme">
      <UserProvider> 
        <ModalProvider>
          <App />
        </ModalProvider>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './styled/Theme.ts'
import { GlobalStyle } from './styled/Global.ts'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { DarkModeProvider } from './context/DarkModeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <DarkModeProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </DarkModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)

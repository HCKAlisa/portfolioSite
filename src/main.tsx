import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router basename="/portfolioSite/">
        <HeroUIProvider>
            <App />
        </HeroUIProvider>
    </Router>
  </StrictMode>,
)

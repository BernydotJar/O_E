import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LearningIntelligenceApp from './app/LearningIntelligenceApp'
import './styles.css'
import './student-twin.css'
import './teacher-intelligence.css'
import './application-shell.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LearningIntelligenceApp />
  </StrictMode>,
)

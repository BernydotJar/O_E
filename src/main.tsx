import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import StudentTwinWorkspace from './components/student-twin/StudentTwinWorkspace'
import './styles.css'
import './student-twin.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StudentTwinWorkspace />
  </StrictMode>,
)

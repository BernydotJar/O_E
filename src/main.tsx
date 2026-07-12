import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import StudentTwinWorkspace from './components/student-twin/StudentTwinWorkspace'
import TeacherIntelligenceWorkspace from './components/teacher-intelligence/TeacherIntelligenceWorkspace'
import './styles.css'
import './student-twin.css'
import './teacher-intelligence.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StudentTwinWorkspace />
    <TeacherIntelligenceWorkspace />
  </StrictMode>,
)

import { useEffect } from 'react'

function TeacherIntelligenceNavigationBridge() {
  useEffect(() => {
    const teacherTab = Array.from(document.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
      .find((button) => /teacher intelligence/i.test(button.textContent ?? ''))

    const scrollToWorkspace = () => {
      window.setTimeout(() => {
        document.getElementById('teacher-intelligence')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }

    teacherTab?.addEventListener('click', scrollToWorkspace)
    return () => teacherTab?.removeEventListener('click', scrollToWorkspace)
  }, [])

  return null
}

export default TeacherIntelligenceNavigationBridge

import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  scenarioName: string
  children: ReactNode
  legacyTeacherPortal?: boolean
}

export default function ScenarioSelectionAdapter({ scenarioName, children, legacyTeacherPortal = false }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const root = rootRef.current
      if (!root) return
      const scope: ParentNode = legacyTeacherPortal ? root.parentElement ?? root : root
      const tab = Array.from(scope.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
        .find((button) => button.textContent?.toLowerCase().includes(scenarioName.toLowerCase()))
      if (tab && tab.getAttribute('aria-selected') !== 'true') tab.click()
    }, 0)

    return () => window.clearTimeout(timer)
  }, [legacyTeacherPortal, scenarioName])

  return (
    <div ref={rootRef} className="scenario-adapter" data-scenario={scenarioName}>
      {legacyTeacherPortal && <div id="economics" hidden aria-hidden="true" />}
      {children}
    </div>
  )
}

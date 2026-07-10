import { useEffect } from 'react'
import type { NarrativeStage } from '../data/executiveNarrative'

type ExecutiveTourProps = {
  active: boolean
  stageIndex: number
  stages: NarrativeStage[]
  onStart: () => void
  onPrevious: () => void
  onNext: () => void
  onExit: () => void
}

function ExecutiveTour({ active, stageIndex, stages, onStart, onPrevious, onNext, onExit }: ExecutiveTourProps) {
  const stage = stages[stageIndex]

  useEffect(() => {
    if (!active) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onExit()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [active, onExit, onNext, onPrevious])

  useEffect(() => {
    if (!active) return
    document.getElementById(stage.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [active, stage])

  if (!active) {
    return (
      <button className="tour-launch" type="button" onClick={onStart}>
        Start Executive Tour
      </button>
    )
  }

  return (
    <aside className="tour-panel" aria-label="Executive Tour" aria-live="polite">
      <div className="tour-meta">
        <span>EXECUTIVE TOUR</span>
        <strong>{stage.index} / {String(stages.length).padStart(2, '0')}</strong>
      </div>
      <div className="tour-progress" aria-label={`Stage ${stageIndex + 1} of ${stages.length}`}>
        {stages.map((item, index) => (
          <i key={item.id} className={index <= stageIndex ? 'complete' : ''} />
        ))}
      </div>
      <p className="tour-question">{stage.question}</p>
      <h2>{stage.title}</h2>
      <p>{stage.message}</p>
      <small>{stage.presenterNote}</small>
      <div className="tour-actions">
        <button type="button" onClick={onPrevious} disabled={stageIndex === 0}>Previous</button>
        <button type="button" onClick={onNext}>
          {stageIndex === stages.length - 1 ? 'Restart' : 'Next'}
        </button>
        <button type="button" onClick={onExit}>Exit</button>
      </div>
    </aside>
  )
}

export default ExecutiveTour

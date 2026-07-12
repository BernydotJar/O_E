import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  teacherIntelligenceScenarios,
  type CoachingDecision,
  type EvidenceKind,
} from '../../data/teacherIntelligenceScenarios'

const evidenceLabels: Record<EvidenceKind, string> = {
  observed_lesson_event: 'Observed lesson event',
  learner_outcome: 'Learner outcome',
  teacher_reported: 'Teacher-reported',
  coach_reported: 'Coach-reported',
  derived_pattern: 'Derived pattern',
  inference: 'Inference',
  unknown: 'Unknown',
}

const decisionLabels: Record<CoachingDecision, string> = {
  undecided: 'Undecided',
  accepted: 'Accepted for experiment',
  adapted: 'Adapted',
  deferred: 'Deferred',
  rejected: 'Rejected',
}

function TeacherIntelligenceContent() {
  const [scenarioId, setScenarioId] = useState(teacherIntelligenceScenarios[0].id)
  const [selectedOptionId, setSelectedOptionId] = useState(teacherIntelligenceScenarios[0].coachingOptions[0].id)
  const [decisions, setDecisions] = useState<Record<string, CoachingDecision>>({})
  const [outcomeGate, setOutcomeGate] = useState('Collect more evidence')

  const scenario = useMemo(
    () => teacherIntelligenceScenarios.find((item) => item.id === scenarioId) ?? teacherIntelligenceScenarios[0],
    [scenarioId],
  )
  const selectedOption = scenario.coachingOptions.find((item) => item.id === selectedOptionId) ?? scenario.coachingOptions[0]

  const switchScenario = (id: string) => {
    const next = teacherIntelligenceScenarios.find((item) => item.id === id) ?? teacherIntelligenceScenarios[0]
    setScenarioId(next.id)
    setSelectedOptionId(next.coachingOptions[0].id)
    setDecisions({})
    setOutcomeGate('Collect more evidence')
  }

  return (
    <section className="teacher-intelligence section-shell" id="teacher-intelligence" aria-labelledby="teacher-intelligence-title">
      <div className="teacher-intelligence-header">
        <div>
          <p className="eyebrow">TEACHER INTELLIGENCE · SYNTHETIC COACHING SIMULATION</p>
          <h2 id="teacher-intelligence-title">Improve the system without reducing the teacher to a score.</h2>
          <p className="teacher-intelligence-lede">
            Observable lesson evidence becomes contextual coaching, teacher-owned experiments, measured outcomes, and provisional shared practice.
          </p>
        </div>
        <a className="text-link" href="#cortex">Back to Organizational Cortex ↑</a>
      </div>

      <div className="teacher-disclosure">
        <strong>Synthetic and non-production.</strong> No real teacher, learner, protected-characteristic, employment, or Open English internal data is used.
      </div>

      <div className="teacher-selector" role="tablist" aria-label="Synthetic teacher scenarios">
        {teacherIntelligenceScenarios.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === scenario.id}
            className={item.id === scenario.id ? 'active' : ''}
            onClick={() => switchScenario(item.id)}
          >
            <span>{item.name}</span>
            <small>{item.context}</small>
          </button>
        ))}
      </div>

      <div className="teacher-snapshot">
        <div className="teacher-identity">
          <span>{scenario.context}</span>
          <h3>{scenario.name}</h3>
          <p>{scenario.segment}</p>
        </div>
        <div className="teacher-snapshot-grid">
          <article><span>OBSERVED STRENGTHS</span><ul>{scenario.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><span>LEARNER OUTCOMES</span><ul>{scenario.outcomeSignals.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><span>EVIDENCE CONFIDENCE</span><strong>{scenario.confidence}</strong></article>
          <article><span>BEHAVIOR UNDER CONSIDERATION</span><strong>{scenario.behaviorUnderConsideration}</strong></article>
          <article className="teacher-unknown"><span>IMPORTANT UNKNOWN</span><strong>{scenario.importantUnknown}</strong></article>
        </div>
      </div>

      <div className="teacher-section-heading">
        <div><p className="eyebrow">LESSON EVIDENCE EXPLORER</p><h3>Evidence type, context, confidence, and limitation remain visible.</h3></div>
      </div>
      <div className="teacher-evidence-grid">
        {scenario.evidence.map((item) => (
          <article key={item.id} className={`evidence-${item.kind}`}>
            <div><span>{evidenceLabels[item.kind]}</span><small>{item.context}</small></div>
            <h4>{item.behavior}</h4>
            <p>{item.outcome}</p>
            <footer><strong>{item.confidence}</strong><span>{item.limitation}</span></footer>
          </article>
        ))}
      </div>

      <div className="teacher-section-heading">
        <div><p className="eyebrow">BEHAVIOR-TO-OUTCOME MAP</p><h3>Association organizes inquiry. It does not prove causality.</h3></div>
        <p>No behavior is universally effective.</p>
      </div>
      <div className="behavior-map">
        {scenario.patterns.map((pattern) => (
          <article key={pattern.id}>
            <div><span>OBSERVED BEHAVIOR</span><strong>{pattern.behavior}</strong></div>
            <i aria-hidden="true">→</i>
            <div><span>ASSOCIATED SIGNAL</span><strong>{pattern.associatedOutcome}</strong></div>
            <i aria-hidden="true">→</i>
            <div><span>PLAUSIBLE MECHANISM</span><strong>{pattern.mechanism}</strong></div>
            <dl>
              <div><dt>Counter-evidence</dt><dd>{pattern.counterEvidence}</dd></div>
              <div><dt>Transferability boundary</dt><dd>{pattern.transferBoundary}</dd></div>
              <div><dt>Confidence</dt><dd>{pattern.confidence}</dd></div>
              <div><dt>Unknown</dt><dd>{pattern.unknown}</dd></div>
            </dl>
          </article>
        ))}
      </div>

      <div className="teacher-section-heading">
        <div><p className="eyebrow">COACHING STUDIO</p><h3>AI proposes. Teachers and coaches decide.</h3></div>
        <p>No recommendation is executed automatically.</p>
      </div>
      <div className="coaching-grid">
        {scenario.coachingOptions.map((option) => {
          const decision = decisions[option.id] ?? 'undecided'
          return (
            <article key={option.id} className={selectedOption.id === option.id ? 'active' : ''}>
              <div className="coaching-card-top"><span>{option.owner}</span><strong>{decisionLabels[decision]}</strong></div>
              <h3>{option.title}</h3>
              <p>{option.rationale}</p>
              <dl>
                <div><dt>Behavior</dt><dd>{option.behavior}</dd></div>
                <div><dt>Mechanism</dt><dd>{option.mechanism}</dd></div>
                <div><dt>Target segment</dt><dd>{option.targetSegment}</dd></div>
                <div><dt>Effort + support</dt><dd>Teacher: {option.teacherEffort} · Organization: {option.organizationalSupport}</dd></div>
                <div><dt>Duration</dt><dd>{option.duration}</dd></div>
                <div><dt>Limitation</dt><dd>{option.limitation}</dd></div>
                <div><dt>Validation target</dt><dd>{option.validationTarget}</dd></div>
              </dl>
              <div className="coaching-decisions" aria-label={`Decision for ${option.title}`}>
                {(['accepted', 'adapted', 'deferred', 'rejected'] as CoachingDecision[]).map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    aria-pressed={decision === choice}
                    onClick={() => setDecisions((current) => ({ ...current, [option.id]: choice }))}
                  >
                    {decisionLabels[choice]}
                  </button>
                ))}
              </div>
              <button className="experiment-button" type="button" onClick={() => setSelectedOptionId(option.id)}>Build experiment plan</button>
            </article>
          )
        })}
      </div>

      <div className="experiment-plan" role="region" aria-label="Bounded experiment plan" aria-live="polite">
        <div className="experiment-plan-header">
          <div><p className="eyebrow">BOUNDED EXPERIMENT PLAN</p><h3>{selectedOption.title}</h3></div>
          <span>Hypothesis, not directive</span>
        </div>
        <div className="experiment-plan-grid">
          <article><span>HYPOTHESIS</span><strong>{selectedOption.experiment.hypothesis}</strong></article>
          <article><span>CONTEXT</span><strong>{selectedOption.experiment.context}</strong></article>
          <article><span>BEHAVIOR CHANGE</span><strong>{selectedOption.experiment.behaviorChange}</strong></article>
          <article><span>DURATION</span><strong>{selectedOption.experiment.duration}</strong></article>
          <article><span>LEADING INDICATOR</span><strong>{selectedOption.experiment.leadingIndicator}</strong></article>
          <article><span>LEARNER OUTCOME</span><strong>{selectedOption.experiment.learnerOutcome}</strong></article>
          <article><span>TEACHER EXPERIENCE</span><strong>{selectedOption.experiment.teacherExperience}</strong></article>
          <article><span>GUARDRAIL</span><strong>{selectedOption.experiment.guardrail}</strong></article>
          <article><span>REVIEW OWNER</span><strong>{selectedOption.experiment.owner}</strong></article>
          <article><span>STOP CONDITION</span><strong>{selectedOption.experiment.stopCondition}</strong></article>
        </div>
        <p>Teacher consent and adaptation are required. Original evidence remains unchanged. This simulation has no employment consequence.</p>
      </div>

      <div className="teacher-two-column">
        <div>
          <div className="teacher-section-heading"><div><p className="eyebrow">OUTCOME REVIEW</p><h3>Review impact across the full teaching system.</h3></div></div>
          <div className="outcome-measures">
            {scenario.measurement.map((item) => <article key={item.category}><span>{item.category}</span><p>{item.indicator}</p><strong>{item.direction}</strong></article>)}
          </div>
          <div className="outcome-gates" aria-label="Outcome decision gate">
            {['Preserve', 'Adapt', 'Expand carefully', 'Collect more evidence', 'Stop'].map((gate) => (
              <button key={gate} type="button" aria-pressed={outcomeGate === gate} onClick={() => setOutcomeGate(gate)}>{gate}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="teacher-section-heading"><div><p className="eyebrow">SHARED PRACTICE MEMORY</p><h3>Provisional guidance, never a universal script.</h3></div></div>
          <article className="practice-memory">
            <span>PROVISIONAL PRACTICE</span><h3>{scenario.sharedPractice.title}</h3><p>{scenario.sharedPractice.evidenceSummary}</p>
            <dl>
              <div><dt>Applicable context</dt><dd>{scenario.sharedPractice.context}</dd></div>
              <div><dt>Known limitations</dt><dd>{scenario.sharedPractice.limitations}</dd></div>
              <div><dt>Confidence</dt><dd>{scenario.sharedPractice.confidence}</dd></div>
              <div><dt>Owner</dt><dd>{scenario.sharedPractice.owner}</dd></div>
              <div><dt>Review date</dt><dd>{scenario.sharedPractice.reviewDate}</dd></div>
            </dl>
          </article>
        </div>
      </div>

      <div className="responsible-coaching">
        <div><p className="eyebrow">RESPONSIBLE COACHING CONTROLS</p><h3>Support professional learning without surveillance.</h3></div>
        <div className="responsible-grid">
          {['Not an employment decision system', 'No opaque teacher score', 'No leaderboard or punitive ranking', 'No protected-characteristic inference', 'Purpose limitation and consent expected', 'No single metric is consequential', 'Teacher contestability is required', 'Practices remain provisional and reviewable', ...scenario.safeguards].map((item) => <article key={item}><strong>{item}</strong></article>)}
        </div>
      </div>
    </section>
  )
}

function TeacherIntelligenceWorkspace() {
  const [host, setHost] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const economics = document.getElementById('economics')
    if (!economics?.parentElement) return

    const portalHost = document.createElement('div')
    portalHost.dataset.teacherIntelligenceHost = 'true'
    economics.parentElement.insertBefore(portalHost, economics)
    setHost(portalHost)

    const teacherTab = Array.from(document.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
      .find((button) => /teacher intelligence/i.test(button.textContent ?? ''))
    const scrollToWorkspace = () => window.setTimeout(() => portalHost.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    teacherTab?.addEventListener('dblclick', scrollToWorkspace)

    return () => {
      teacherTab?.removeEventListener('dblclick', scrollToWorkspace)
      portalHost.remove()
    }
  }, [])

  return host ? createPortal(<TeacherIntelligenceContent />, host) : null
}

export default TeacherIntelligenceWorkspace

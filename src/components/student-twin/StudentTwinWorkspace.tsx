import { useMemo, useState } from 'react'
import { studentTwinScenarios, type DecisionState } from '../../data/studentTwinScenarios'

const decisionLabels: Record<DecisionState, string> = {
  undecided: 'Undecided',
  approved: 'Approved',
  deferred: 'Deferred',
  rejected: 'Rejected',
}

function StudentTwinWorkspace() {
  const [scenarioId, setScenarioId] = useState(studentTwinScenarios[0].id)
  const [activeInterventionId, setActiveInterventionId] = useState(studentTwinScenarios[0].interventions[0].id)
  const [decisions, setDecisions] = useState<Record<string, DecisionState>>({})
  const scenario = useMemo(() => studentTwinScenarios.find((item) => item.id === scenarioId) ?? studentTwinScenarios[0], [scenarioId])
  const activeIntervention = scenario.interventions.find((item) => item.id === activeInterventionId) ?? scenario.interventions[0]

  const switchScenario = (id: string) => {
    const next = studentTwinScenarios.find((item) => item.id === id) ?? studentTwinScenarios[0]
    setScenarioId(next.id)
    setActiveInterventionId(next.interventions[0].id)
    setDecisions({})
  }

  const setDecision = (interventionId: string, decision: DecisionState) => {
    setDecisions((current) => ({ ...current, [interventionId]: decision }))
  }

  return (
    <section className="student-twin section-shell" id="student-twin" aria-labelledby="student-twin-title">
      <div className="student-twin-header">
        <div>
          <p className="eyebrow">STUDENT DIGITAL TWIN · SYNTHETIC LEARNER SIMULATION</p>
          <h2 id="student-twin-title">Understand the learning state. Never pretend to know the person.</h2>
          <p className="student-twin-lede">A bounded decision workspace separating evidence, derived state, inference, uncertainty, human judgment, and measured outcomes.</p>
        </div>
        <a className="text-link" href="#cortex">Back to Organizational Cortex ↑</a>
      </div>

      <div className="learner-selector" role="tablist" aria-label="Synthetic learner scenarios">
        {studentTwinScenarios.map((item) => (
          <button key={item.id} role="tab" aria-selected={scenario.id === item.id} className={scenario.id === item.id ? 'active' : ''} onClick={() => switchScenario(item.id)}>
            <span>{item.name}</span><small>{item.context}</small>
          </button>
        ))}
      </div>

      <div className="twin-disclosure"><strong>Synthetic only.</strong> No real learner, Open English, protected-characteristic, or production data is used.</div>

      <div className="learner-snapshot">
        <div className="snapshot-identity">
          <span>{scenario.context}</span><h3>{scenario.name}</h3><p>{scenario.goal}</p>
        </div>
        <div className="snapshot-grid">
          <article><span>TARGET</span><strong>{scenario.targetOutcome}</strong><small>{scenario.targetDate}</small></article>
          <article><span>PROFICIENCY</span><strong>{scenario.proficiency}</strong></article>
          <article><span>MOMENTUM</span><strong>{scenario.momentum}</strong></article>
          <article><span>CONFIDENCE</span><strong>{scenario.confidence}</strong></article>
          <article><span>ASSESSMENT</span><strong>{scenario.assessmentBand}</strong><small>Confidence: {scenario.assessmentConfidence}</small></article>
          <article className="unknown-card"><span>IMPORTANT UNKNOWN</span><strong>{scenario.importantUnknown}</strong></article>
        </div>
      </div>

      <div className="twin-section-heading"><div><p className="eyebrow">LEARNER-STATE MAP</p><h3>Signals have provenance. Inference has limits.</h3></div></div>
      <div className="state-dimension-grid">
        {scenario.dimensions.map((dimension) => <article key={dimension.label}><span>{dimension.source}</span><strong>{dimension.label}</strong><p>{dimension.value}</p></article>)}
      </div>

      <div className="twin-two-column">
        <div>
          <div className="twin-section-heading"><div><p className="eyebrow">EVIDENCE TIMELINE</p><h3>What changed, when, and from which source?</h3></div></div>
          <div className="evidence-timeline">
            {scenario.evidence.map((event) => <article key={`${event.date}-${event.text}`}><div><span>{event.date}</span><small>{event.source} · {event.kind}</small></div><p>{event.text}</p><strong>{event.effect}</strong></article>)}
          </div>
        </div>
        <div>
          <div className="twin-section-heading"><div><p className="eyebrow">EXPLAINABLE ASSESSMENT</p><h3>Prioritization, not diagnosis.</h3></div></div>
          <div className="explainability-grid">
            <article><span>SIGNALS INCREASING CONCERN</span><ul>{scenario.concerns.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><span>COUNTER-SIGNALS</span><ul>{scenario.counterSignals.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><span>IMPORTANT UNKNOWNS</span><p>{scenario.importantUnknown}</p></article>
            <article><span>USE LIMITATIONS</span><ul>{scenario.limitations.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </div>
      </div>

      <div className="twin-section-heading"><div><p className="eyebrow">INTERVENTION STUDIO</p><h3>AI recommends. Humans decide.</h3></div><p>No action is executed in this simulation.</p></div>
      <div className="intervention-grid">
        {scenario.interventions.map((intervention) => {
          const decision = decisions[intervention.id] ?? 'undecided'
          return <article key={intervention.id} className={activeIntervention.id === intervention.id ? 'active' : ''}>
            <div className="intervention-top"><span>{intervention.owner}</span><strong>{decisionLabels[decision]}</strong></div>
            <h3>{intervention.title}</h3><p>{intervention.rationale}</p>
            <dl><div><dt>Mechanism</dt><dd>{intervention.mechanism}</dd></div><div><dt>Effort</dt><dd>Learner: {intervention.learnerEffort} · Organization: {intervention.organizationEffort}</dd></div><div><dt>Urgency</dt><dd>{intervention.urgency}</dd></div><div><dt>Limitation</dt><dd>{intervention.limitation}</dd></div><div><dt>Validation target</dt><dd>{intervention.validationTarget}</dd></div></dl>
            <div className="decision-controls" aria-label={`Decision for ${intervention.title}`}>
              {(['approved', 'deferred', 'rejected'] as DecisionState[]).map((choice) => <button key={choice} type="button" aria-pressed={decision === choice} onClick={() => setDecision(intervention.id, choice)}>{decisionLabels[choice]}</button>)}
            </div>
            <button className="projection-button" type="button" onClick={() => setActiveInterventionId(intervention.id)}>Explore projection</button>
          </article>
        })}
      </div>

      <div className="projection-panel" role="region" aria-label="Counterfactual projection" aria-live="polite">
        <div><p className="eyebrow">COUNTERFACTUAL · DIRECTIONAL HYPOTHESIS</p><h3>{activeIntervention.title}</h3><p>Original evidence remains unchanged. This projection does not establish causality or guarantee an outcome.</p></div>
        <div className="projection-grid">{activeIntervention.projection.map((item) => <article key={item}><span>PROJECTED SIGNAL</span><strong>{item}</strong></article>)}</div>
        <div className="projection-assumptions"><strong>Assumptions:</strong> intervention is delivered as designed, learner context remains stable, and leading indicators are measured in a controlled pilot.</div>
      </div>

      <div className="twin-two-column measurement-responsibility">
        <div><div className="twin-section-heading"><div><p className="eyebrow">MEASUREMENT PLAN</p><h3>Measure before scaling.</h3></div></div><div className="measurement-grid">{scenario.measurement.map((item) => <article key={item.category}><span>{item.category}</span><p>{item.indicator}</p></article>)}</div><div className="decision-gates">{['Continue', 'Revise', 'Escalate', 'Stop'].map((item) => <span key={item}>{item}</span>)}</div></div>
        <div><div className="twin-section-heading"><div><p className="eyebrow">RESPONSIBLE PERSONALIZATION</p><h3>{scenario.ageCategory === 'junior' ? 'Junior safeguards elevated.' : 'Support without surveillance.'}</h3></div></div><div className="safeguard-list">{scenario.safeguards.map((item) => <article key={item}><strong>{item}</strong></article>)}</div><p className="prohibited-use">Prohibited: punitive ranking, access restriction, pricing decisions, diagnosis, or autonomous consequential action.</p></div>
      </div>
    </section>
  )
}

export default StudentTwinWorkspace

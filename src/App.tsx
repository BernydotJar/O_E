import { useCallback, useMemo, useState } from 'react'
import ExecutiveTour from './components/ExecutiveTour'
import {
  discoveryHypotheses,
  narrativeStages,
  operatingLayers,
  operatingPrinciples,
  strategicChoices,
} from './data/executiveNarrative'

type Domain = 'student' | 'teacher' | 'engineering'

type DomainConfig = {
  label: string
  eyebrow: string
  title: string
  description: string
  metric: string
  metricLabel: string
}

const domains: Record<Domain, DomainConfig> = {
  student: {
    label: 'Student Twin',
    eyebrow: 'RETENTION SIGNAL',
    title: 'Teach the learner, not the average.',
    description:
      'A synthetic learner model separates observed behavior from inference, then proposes a human-owned intervention.',
    metric: '72%',
    metricLabel: 'retention probability',
  },
  teacher: {
    label: 'Teacher Intelligence',
    eyebrow: 'BEHAVIOR MINING',
    title: 'Make the top 5% teach the system.',
    description:
      'The platform identifies outcome-linked teaching behaviors and turns them into measurable coaching recommendations.',
    metric: '+11%',
    metricLabel: 'projected cohort lift',
  },
  engineering: {
    label: 'Build Engine',
    eyebrow: 'AGENTIC DELIVERY',
    title: 'Specs first. Evidence always.',
    description:
      'The same AI-native operating model governs how the platform is built: bounded scope, approval, verification, and review.',
    metric: '1',
    metricLabel: 'active feature',
  },
}

const loop = ['Interaction', 'Signals', 'Evaluation', 'Memory', 'Recommendation', 'Outcome']

function App() {
  const [activeDomain, setActiveDomain] = useState<Domain>('student')
  const [tourActive, setTourActive] = useState(false)
  const [tourStage, setTourStage] = useState(0)
  const active = domains[activeDomain]

  const startTour = useCallback(() => {
    setTourStage(0)
    setTourActive(true)
  }, [])

  const previousTourStage = useCallback(() => {
    setTourStage((current) => Math.max(0, current - 1))
  }, [])

  const nextTourStage = useCallback(() => {
    setTourStage((current) => (current === narrativeStages.length - 1 ? 0 : current + 1))
  }, [])

  const exitTour = useCallback(() => setTourActive(false), [])

  const domainDetail = useMemo(() => {
    if (activeDomain === 'student') {
      return {
        observed: ['Attendance declined 18% in 14 days', 'Two incomplete speaking missions', 'Confidence pulse: 46/100'],
        inference: 'Early habit formation is weakening; churn risk is elevated but reversible.',
        action: 'Assign a 12-minute confidence mission and trigger teacher outreach before the next live class.',
        outcome: 'Target: restore three-session weekly rhythm within 10 days.',
      }
    }

    if (activeDomain === 'teacher') {
      return {
        observed: ['Top cohort asks 2.4× more open questions', 'Correction delay averages 7 seconds', 'Student talk time reaches 68%'],
        inference: 'Question density and delayed correction correlate with higher confidence and lesson completion.',
        action: 'Coach the selected teacher on one behavior at a time; validate through controlled lesson cohorts.',
        outcome: 'Target: narrow performance variance without standardizing personality.',
      }
    }

    return {
      observed: ['SPEC-001 approved', 'Implementation boundary: static frontend', 'Synthetic data and no external model calls'],
      inference: 'The executive narrative can prove the operating model without infrastructure or data-access risk.',
      action: 'Build, test, review, and capture evidence before marking the feature complete.',
      outcome: 'Target: a five-minute executive story traceable to every acceptance criterion.',
    }
  }, [activeDomain])

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Open English AI-Native home">
          <span className="brand-mark">OE</span>
          <span>AI-Native Office</span>
        </a>
        <div className="nav-links">
          <a href="#hypotheses">Discovery</a>
          <a href="#operating-model">Operating model</a>
          <a href="#roadmap">90 days</a>
          <span className="status-pill">Synthetic MVP</span>
        </div>
      </nav>

      <ExecutiveTour
        active={tourActive}
        stageIndex={tourStage}
        stages={narrativeStages}
        onStart={startTour}
        onPrevious={previousTourStage}
        onNext={nextTourStage}
        onExit={exitTour}
      />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">CTO WEEK ONE · TRANSFORMATION THESIS</p>
          <h1>What if Open English were founded today?</h1>
          <p className="hero-lede">
            It would not place a chatbot inside an LMS. It would become one governed learning system where every class,
            correction, workflow, and decision improves the learner, the teacher, the curriculum, and the company.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={startTour}>Start the 3-minute tour</button>
            <a className="text-link" href="#hypotheses">Explore the thesis →</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Organizational learning loop preview">
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="core">
            <span>ORGANIZATIONAL</span>
            <strong>CORTEX</strong>
            <small>Every interaction teaches the company.</small>
          </div>
          <div className="signal signal-a">STUDENT</div>
          <div className="signal signal-b">TEACHER</div>
          <div className="signal signal-c">ENGINEERING</div>
        </div>
      </section>

      <section className="urgency section-shell" id="urgency">
        <div className="section-number">02</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHY CHANGE NOW</p>
            <h2>Digital consolidation and AI adoption are arriving together.</h2>
          </div>
          <p>
            The strategic risk is not only moving slowly. It is investing in isolated AI capabilities that create activity
            without creating compounding product knowledge, operating leverage, or measurable learning impact.
          </p>
        </div>
        <div className="urgency-grid">
          <article><span>01</span><h3>Learner expectations</h3><p>Feedback, adaptation, and assistance are becoming immediate and personal.</p></article>
          <article><span>02</span><h3>Model capability</h3><p>Language, speech, evaluation, and agentic workflows can now support bounded production use cases.</p></article>
          <article><span>03</span><h3>Economic pressure</h3><p>Inference cost and platform complexity decide which personalized experiences can scale.</p></article>
          <article><span>04</span><h3>Organizational memory</h3><p>Companies that preserve evidence and outcomes learn faster than companies that only ship features.</p></article>
        </div>
      </section>

      <section className="hypotheses section-shell" id="hypotheses">
        <div className="section-number">03</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">DISCOVERY BEFORE PRESCRIPTION</p>
            <h2>Start with hypotheses, not invented certainty.</h2>
          </div>
          <p>These statements are derived from the role brief and require validation during discovery. They are not claims of internal access.</p>
        </div>
        <div className="hypothesis-grid">
          {discoveryHypotheses.map((item) => (
            <article key={item.title}>
              <span className="evidence-label">TO VALIDATE</span>
              <h3>{item.title}</h3>
              <dl>
                <div><dt>Brief signal</dt><dd>{item.signal}</dd></div>
                <div><dt>Business consequence</dt><dd>{item.consequence}</dd></div>
                <div><dt>Discovery question</dt><dd>{item.question}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="definition section-shell" id="definition">
        <div className="section-number">04</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">AI-NATIVE DEFINITION</p>
            <h2>The unit of value is a governed learning loop.</h2>
          </div>
          <p>AI-native is not defined by the number of models deployed. It is defined by how reliably interactions become evidence, decisions, outcomes, and reusable organizational knowledge.</p>
        </div>
        <div className="principles-grid">
          {operatingPrinciples.map(([name, description]) => (
            <article key={name}><strong>{name}</strong><p>{description}</p></article>
          ))}
        </div>
        <div className="human-loop">
          {['Evidence', 'Inference', 'Recommendation', 'Human decision', 'Outcome', 'Memory update'].map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="premise section-shell" id="transformation">
        <div className="section-number">05</div>
        <div>
          <p className="eyebrow">PRODUCT + COMPANY TRANSFORMATION</p>
          <h2>One evidence discipline across the learner experience and the company.</h2>
        </div>
        <div className="contrast-grid">
          <article>
            <span className="contrast-index">01</span>
            <h3>AI-Native Product</h3>
            <p>Adaptive learning, teacher augmentation, early-risk intervention, social learning, and measurable personalization.</p>
          </article>
          <article>
            <span className="contrast-index">02</span>
            <h3>AI-Native Company</h3>
            <p>Engineering, support, sales, finance, and curriculum improve through the same evidence, approval, evaluation, and outcome loops.</p>
          </article>
        </div>
      </section>

      <section className="operating-model section-shell" id="operating-model">
        <div className="section-number">06</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">FUTURE-STATE OPERATING MODEL</p>
            <h2>Build differentiated intelligence. Integrate systems of record.</h2>
          </div>
          <p>The target architecture separates experiences, intelligence, platform capabilities, and enterprise systems while preserving clear accountability.</p>
        </div>
        <div className="layer-stack">
          {operatingLayers.map((layer, index) => (
            <article key={layer.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{layer.name}</h3>
              <ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="curriculum-loop">
          <p className="eyebrow">GOVERNED CURRICULUM REFRESH</p>
          {['New evidence', 'Relevance screening', 'Proposed update', 'Human review', 'Controlled publication', 'Outcome measurement'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="choices section-shell" id="choices">
        <div className="section-number">07</div>
        <div className="section-heading">
          <div><p className="eyebrow">STRATEGIC CHOICES</p><h2>Capital discipline is part of architecture.</h2></div>
          <p>Not every capability should be custom-built, and not every legacy concern should be replaced in the first release.</p>
        </div>
        <div className="choice-grid">
          {Object.entries(strategicChoices).map(([type, items]) => (
            <article key={type} className={`choice-${type}`}>
              <span>{type.toUpperCase()}</span>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="baseline-grid">
          <article><span>TABLE STAKES</span><p>Courses, roles, quizzes, dashboards, payments, progress tracking, recommendations, chat, analytics, and scalable delivery.</p></article>
          <article><span>DIFFERENTIATION</span><p>Learner-state models, teacher intelligence, governed memory, outcome-linked interventions, curriculum refresh, evidence controls, and AI economics.</p></article>
        </div>
      </section>

      <section className="cortex section-shell" id="cortex">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE OPEN ENGLISH FLYWHEEL</p>
            <h2>One closed loop. Compounding intelligence.</h2>
          </div>
          <p>This is a synthetic, evidence-oriented simulation of the operating model. It is not a production model or a claim about internal Open English data.</p>
        </div>
        <div className="loop" aria-label="Organizational Cortex loop">
          {loop.map((item, index) => (
            <div className="loop-step" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < loop.length - 1 && <i aria-hidden="true">→</i>}
            </div>
          ))}
        </div>
        <div className="simulation">
          <div className="domain-tabs" role="tablist" aria-label="Cortex domains">
            {(Object.keys(domains) as Domain[]).map((domain) => (
              <button key={domain} role="tab" aria-selected={activeDomain === domain} className={activeDomain === domain ? 'active' : ''} onClick={() => setActiveDomain(domain)}>
                {domains[domain].label}
              </button>
            ))}
          </div>
          <div className="simulation-grid">
            <div className="domain-intro">
              <p className="eyebrow">{active.eyebrow}</p><h3>{active.title}</h3><p>{active.description}</p>
              <div className="metric-block"><strong>{active.metric}</strong><span>{active.metricLabel}</span></div>
            </div>
            <div className="evidence-stack">
              <article><span>OBSERVED EVIDENCE</span><ul>{domainDetail.observed.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article><span>MODEL INFERENCE</span><p>{domainDetail.inference}</p></article>
              <article><span>HUMAN-OWNED ACTION</span><p>{domainDetail.action}</p></article>
              <article className="outcome-card"><span>VALIDATION TARGET</span><p>{domainDetail.outcome}</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="economics section-shell" id="economics">
        <div className="section-number">08</div>
        <div className="section-heading">
          <div><p className="eyebrow">ECONOMICS + IMPACT</p><h2>Benchmark the engine and the educational product separately.</h2></div>
          <p>A strong model benchmark does not prove learning impact. A successful pilot that cannot meet unit economics does not prove scale.</p>
        </div>
        <div className="evaluation-grid">
          <article><span>MODEL + PLATFORM EVIDENCE</span><ul><li>Groundedness and source adherence</li><li>Reproducibility and evaluation pass rate</li><li>Latency, cost, failure, and escalation rate</li></ul></article>
          <article><span>EDUCATIONAL + PRODUCT IMPACT</span><ul><li>Proficiency and learning velocity</li><li>Confidence, completion, and retention</li><li>Teacher effectiveness and successful remediation</li></ul></article>
        </div>
        <div className="metric-grid">
          {[
            ['AI cost per lesson', 'Baseline', 'Baseline required'],
            ['Cost per successful outcome', 'Pilot', 'Pilot target'],
            ['Learning velocity', '+18%', 'Hypothesis'],
            ['Early churn risk', '−12%', 'Pilot target'],
            ['Teacher prep time', '−35%', 'Pilot target'],
            ['Evaluation coverage', '95%', 'Scale gate'],
          ].map(([label, value, note]) => <article key={label}><span>{note}</span><strong>{value}</strong><p>{label}</p></article>)}
        </div>
        <div className="economics-controls">
          {['Deterministic logic', 'Lightweight models', 'Model routing', 'Caching + reuse', 'Async processing', 'Human escalation'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="roadmap section-shell" id="roadmap">
        <div className="section-heading">
          <div><p className="eyebrow">FIRST 90 DAYS</p><h2>Build the product roadmap and impact roadmap together.</h2></div>
        </div>
        <div className="roadmap-grid">
          <article><span>0—30</span><h3>Instrument and baseline</h3><p>Validate hypotheses, define the Learning Graph, establish model and educational baselines, and recruit early experimenters.</p><strong>Gate: evidence-ready pilots</strong></article>
          <article><span>31—60</span><h3>Run two bounded pilots</h3><p>Early-churn intervention and teacher-intelligence coaching with controlled cohorts, human approval, and explicit stop conditions.</p><strong>Gate: measurable lift + acceptable risk</strong></article>
          <article><span>61—90</span><h3>Decide what scales</h3><p>Compare technical quality, educational impact, adoption, and economics before sequencing platform investment.</p><strong>Gate: scale, revise, or stop</strong></article>
        </div>
      </section>

      <section className="decisions section-shell" id="decisions">
        <div className="section-number">09</div>
        <div className="section-heading">
          <div><p className="eyebrow">EXECUTIVE DECISIONS REQUIRED</p><h2>Approve evidence before approving the empire.</h2></div>
        </div>
        <div className="decision-grid">
          <article><span>01</span><h3>Discovery mandate</h3><p>Authorize access to the people, workflows, metrics, and architecture needed to validate the current-state hypotheses.</p></article>
          <article><span>02</span><h3>Two bounded pilots</h3><p>Approve one learner-retention pilot and one teacher-augmentation pilot with explicit human accountability.</p></article>
          <article><span>03</span><h3>Shared measurement model</h3><p>Require technical evaluation, educational impact, adoption, and economics before scale decisions.</p></article>
          <article><span>04</span><h3>Platform investment gate</h3><p>Fund durable platform capabilities only after pilot evidence establishes where differentiation compounds.</p></article>
        </div>
      </section>

      <footer>
        <p>Open English AI-Native Transformation · Spec-Driven MVP</p>
        <p>Synthetic scenarios. No proprietary or production data.</p>
      </footer>
    </main>
  )
}

export default App

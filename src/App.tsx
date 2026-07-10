import { useMemo, useState } from 'react'

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
  const active = domains[activeDomain]

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
      observed: ['SPEC-000 approved', 'Implementation boundary: frontend only', 'Synthetic data and no external model calls'],
      inference: 'The MVP can prove the operating model without infrastructure or data-access risk.',
      action: 'Build, test, review, and capture evidence before marking the feature complete.',
      outcome: 'Target: an interview-ready product increment traceable to every acceptance criterion.',
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
          <a href="#cortex">Cortex</a>
          <a href="#roadmap">90 days</a>
          <span className="status-pill">Synthetic MVP</span>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">CTO WEEK ONE · TRANSFORMATION THESIS</p>
          <h1>What if Open English were founded today?</h1>
          <p className="hero-lede">
            It would not be three disconnected products. It would be one learning system where every class,
            correction, workflow, and decision teaches the company how to improve.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#cortex">Enter the Organizational Cortex</a>
            <a className="text-link" href="#roadmap">See the first 90 days →</a>
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

      <section className="premise section-shell">
        <div>
          <p className="eyebrow">THE STRATEGIC SHIFT</p>
          <h2>From platforms that store data to an organization that remembers.</h2>
        </div>
        <div className="contrast-grid">
          <article>
            <span className="contrast-index">01</span>
            <h3>AI-Native Product</h3>
            <p>Adaptive learning, teacher augmentation, early-risk intervention, and measurable personalization.</p>
          </article>
          <article>
            <span className="contrast-index">02</span>
            <h3>AI-Native Company</h3>
            <p>Engineering, support, sales, finance, and curriculum improve through the same evidence loops.</p>
          </article>
        </div>
      </section>

      <section className="cortex section-shell" id="cortex">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE OPEN ENGLISH FLYWHEEL</p>
            <h2>One closed loop. Compounding intelligence.</h2>
          </div>
          <p>
            This is not a production model or a claim about internal Open English data. It is a synthetic,
            evidence-oriented simulation of the operating model.
          </p>
        </div>

        <div className="loop" aria-label="Organizational Cortex loop">
          {loop.map((item, index) => (
            <div className="loop-step" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              {index < loop.length - 1 && <i aria-hidden="true">→</i>}
            </div>
          ))}
        </div>

        <div className="simulation">
          <div className="domain-tabs" role="tablist" aria-label="Cortex domains">
            {(Object.keys(domains) as Domain[]).map((domain) => (
              <button
                key={domain}
                role="tab"
                aria-selected={activeDomain === domain}
                className={activeDomain === domain ? 'active' : ''}
                onClick={() => setActiveDomain(domain)}
              >
                {domains[domain].label}
              </button>
            ))}
          </div>

          <div className="simulation-grid">
            <div className="domain-intro">
              <p className="eyebrow">{active.eyebrow}</p>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="metric-block">
                <strong>{active.metric}</strong>
                <span>{active.metricLabel}</span>
              </div>
            </div>

            <div className="evidence-stack">
              <article>
                <span>OBSERVED EVIDENCE</span>
                <ul>
                  {domainDetail.observed.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article>
                <span>MODEL INFERENCE</span>
                <p>{domainDetail.inference}</p>
              </article>
              <article>
                <span>HUMAN-OWNED ACTION</span>
                <p>{domainDetail.action}</p>
              </article>
              <article className="outcome-card">
                <span>VALIDATION TARGET</span>
                <p>{domainDetail.outcome}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BOARD-LEVEL MEASUREMENT</p>
            <h2>Learning outcomes must connect to economics.</h2>
          </div>
        </div>
        <div className="metric-grid">
          {[
            ['Learning velocity', '+18%', 'Hypothesis'],
            ['Early churn risk', '−12%', 'Pilot target'],
            ['Teacher prep time', '−35%', 'Pilot target'],
            ['Cost per lesson', '−9%', 'Scale target'],
          ].map(([label, value, note]) => (
            <article key={label}>
              <span>{note}</span>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap section-shell" id="roadmap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FIRST 90 DAYS</p>
            <h2>Build evidence before building the empire.</h2>
          </div>
        </div>
        <div className="roadmap-grid">
          <article>
            <span>0—30</span>
            <h3>Instrument the system</h3>
            <p>Unified domain model, event taxonomy, AI governance, agentic SDLC, and outcome baselines.</p>
          </article>
          <article>
            <span>31—60</span>
            <h3>Run two bounded pilots</h3>
            <p>Early-churn intervention and teacher-intelligence coaching using controlled, measurable cohorts.</p>
          </article>
          <article>
            <span>61—90</span>
            <h3>Decide what scales</h3>
            <p>Validate causal lift, sequence platform integrations, define economics, and present Board decisions.</p>
          </article>
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

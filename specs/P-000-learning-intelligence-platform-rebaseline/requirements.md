# Requirements — P-000 Learning Intelligence Platform Rebaseline

## Status

`spec_ready`

This specification is complete enough for human review. It must not move to `approved`, and no application implementation may begin, until the decisions in this document are explicitly approved.

## Mode

`MVP` for the first pilot, with explicit boundaries for a later `SHIP` phase.

## Product Vision

The **Learning Intelligence Platform (LIP)** is the primary Open English product experience: a governed system that turns learning interactions into evidence, supports human decisions, runs bounded interventions, measures outcomes, and converts validated findings into reusable organizational knowledge.

The platform is not a dashboard of AI features. It is the operating layer for continuous learning improvement across learners, teachers, curriculum, operations, product, and engineering.

North-star loop:

```text
Interaction -> Signal -> Evidence -> Interpretation -> Human decision
-> Bounded intervention -> Outcome measurement -> Organizational memory
```

## Product Outcomes

The MVP must demonstrate that Open English can:

1. identify a meaningful learner or teaching opportunity from traceable evidence;
2. distinguish observed facts, derived signals, hypotheses, decisions, and outcomes;
3. keep consequential judgment with accountable humans;
4. design and review a bounded intervention;
5. connect learning outcomes to retention, experience, and operating leverage without claiming causality prematurely;
6. preserve useful findings as contextual, reviewable organizational knowledge.

## Primary Users and Roles

### Learner-facing roles

- **Learner** — understands goals, evidence, recommendations, consent, and progress; can contest or decline nonessential recommendations.
- **Teacher** — reviews learner context, chooses instructional actions, records observations, and evaluates outcomes.
- **Academic coach or lead** — supports teachers, reviews evidence quality, and prevents unsupported conclusions.

### Product and learning roles

- **Learning scientist or curriculum lead** — defines learning constructs, evaluation methods, segment boundaries, and validity criteria.
- **Product manager** — owns problems, user outcomes, experiments, prioritization, and product metrics.
- **Operations lead** — manages intervention capacity, service levels, escalations, and operational feasibility.
- **Data or AI practitioner** — builds governed signals, evaluations, recommendations, and monitoring under approved contracts.

### Strategic and control roles

- **Executive or business leader** — reviews portfolio outcomes, economics, risks, and strategic decisions through a private module.
- **Privacy, security, legal, and responsible-AI reviewers** — approve sensitive data use, model behavior, controls, and deployment gates.
- **Platform administrator** — manages roles, feature access, configuration, audit evidence, and approved integrations.

## Jobs to Be Done

1. **Understand the learner state** — When a learner is progressing, struggling, disengaging, or changing goals, help an authorized human understand the evidence, uncertainty, and relevant context.
2. **Choose an intervention** — When multiple actions are possible, compare expected mechanisms, effort, risk, capacity, and evidence requirements.
3. **Improve teaching practice** — When lesson patterns appear meaningful, help teachers test practices without punitive ranking or opaque scoring.
4. **Evaluate impact** — When an intervention runs, measure learning, experience, equity, teacher, operational, and business outcomes with appropriate baselines and caveats.
5. **Reuse validated learning** — When evidence is sufficiently strong, preserve the finding with scope, limitations, owner, and review date.
6. **Govern AI-assisted decisions** — When AI produces a signal or recommendation, expose provenance, confidence, policy boundaries, human ownership, and override paths.
7. **Operate the learning system** — When queues, experiments, or integrations fail, show accountable status, exceptions, and recovery actions.
8. **Review strategic performance** — When leaders need portfolio visibility, connect learning outcomes to retention, margin, capacity, and investment decisions without exposing the executive module as the default experience.

## Functional Domains

### D1 — Learner Intelligence

Learner goals, proficiency, activity, evidence timeline, strengths, friction, confidence, hypotheses, intervention history, and outcome review.

### D2 — Teacher Intelligence

Lesson evidence, instructional patterns, teacher reflection, coaching options, bounded experiments, teacher-owned decisions, and shared-practice candidates.

### D3 — Intervention and Experiment Management

Hypotheses, cohorts, owners, treatment definitions, guardrails, duration, capacity, stop conditions, review gates, and outcome decisions.

### D4 — Learning Outcomes and Evaluation

Skill progression, retention of learning, engagement, confidence, completion, continuation, segment consistency, evaluation quality, and causal-strength labeling.

### D5 — Organizational Memory

Validated findings, applicable context, evidence package, limitations, confidence, owner, review date, supersession, and deprecation.

### D6 — Operations and Case Management

Human queues, service levels, assignment, escalation, intervention capacity, completion evidence, exceptions, and operational feedback.

### D7 — AI Governance and Audit

Model or rule provenance, prompt and policy version, input/output trace, evaluation results, approval state, override, contestability, access log, and incident linkage.

### D8 — Platform Administration

Identity, roles, entitlements, feature flags, integration configuration, taxonomy, policy configuration, and environment controls.

### D9 — Strategic Executive Experience

Private portfolio view for transformation thesis, economics, roadmap, risks, organizational learning, and investment decisions. It is not the primary landing page.

## Information Architecture and Navigation

The default authenticated experience must use this primary navigation:

```text
Home
Learners
Teachers
Interventions
Outcomes
Knowledge
Operations
```

Contextual navigation:

- search and command entry;
- notifications and assigned reviews;
- evidence and audit drawer;
- help and policy disclosures;
- profile and role switch where authorized.

Administrative navigation is role-gated:

```text
Administration
Governance
Integrations
```

The **Executive Experience** must be absent from standard navigation. It may be exposed only through an explicit entitlement, private route, or feature flag and must never be the anonymous or default authenticated landing page.

## MVP Scope

The MVP is a synthetic, frontend-first product simulation centered on one end-to-end learning-improvement journey:

```text
Learner signal -> evidence review -> teacher or coach decision
-> bounded intervention -> outcome review -> knowledge candidate
```

The MVP must include:

- a role-aware Learning Intelligence home;
- one synthetic learner case connected to one teacher context;
- an evidence timeline with source and confidence distinctions;
- at least three intervention options with human decision states;
- one bounded experiment plan with metrics, guardrails, owner, and stop condition;
- a multidimensional outcome review;
- a provisional organizational-memory artifact;
- visible AI-governance and audit evidence;
- a private, non-default entry point to the existing Executive Experience;
- clear synthetic-data and non-production labeling.

## MVP Non-Goals

The MVP must not:

- use real Open English learner, teacher, employee, operational, or financial data;
- implement production authentication, authorization, persistence, APIs, agents, model calls, integrations, or infrastructure;
- claim production readiness, regulatory compliance, causal impact, or validated economics;
- automate consequential learner, teacher, employment, pricing, or access decisions;
- replace the existing application before a separate implementation specification is approved;
- introduce a full LMS, CRM, data lake, experimentation platform, or knowledge-management system;
- create additional operational screens beyond the approved pilot journey.

## System Boundaries

### Frontend

Owns presentation, navigation, interaction state, accessibility, synthetic scenarios, evidence labeling, and role-aware experience simulation.

### Backend

Future responsibility: domain APIs, policy enforcement, workflow state, audit event creation, integration orchestration, and durable records. No backend implementation is authorized by P-000.

### AI Layer

Future responsibility: bounded classification, summarization, retrieval, recommendation, and evaluation services. AI outputs must remain advisory unless a later approved specification explicitly defines safe automation.

### Platform Layer

Future responsibility: identity, authorization, tenancy, configuration, feature flags, observability, secrets, deployment, reliability, and integration runtime.

## Data and Integration Assumptions

Potential future source systems include:

- LMS and curriculum systems;
- lesson scheduling and attendance;
- assessment and proficiency records;
- learner support or CRM interactions;
- teacher tools and lesson artifacts;
- product analytics and experimentation;
- billing, subscription, and retention systems;
- knowledge and content repositories.

These are assumptions, not approved integrations. Every integration requires a separate data contract covering purpose, fields, owner, legal basis, retention, access, freshness, failure behavior, reconciliation, and deletion.

Canonical entities anticipated for later design:

- Learner, Teacher, Cohort, Course, Lesson, Assessment;
- Interaction, EvidenceItem, Signal, Hypothesis;
- Recommendation, HumanDecision, Intervention, Experiment;
- OutcomeMeasure, Evaluation, KnowledgeArtifact;
- PolicyDecision, AuditEvent, ModelVersion, IntegrationRun.

## Evidence and Auditability

Every material recommendation or conclusion must preserve:

- source category and source reference;
- event time and ingestion time;
- evidence owner and permitted purpose;
- transformation or derivation method;
- model, prompt, rule, or policy version when applicable;
- confidence and important unknowns;
- human reviewer, decision, rationale, and timestamp;
- intervention and outcome linkage;
- override, contest, correction, and supersession history.

The UI must visibly distinguish:

```text
Observed evidence
Human-reported evidence
Derived signal
AI-generated hypothesis
Human decision
Measured outcome
Unknown or missing evidence
```

## Governance and Human Control

- Humans remain accountable for consequential decisions.
- AI recommendations must be explainable enough for the assigned role to review.
- Users must be able to accept, adapt, defer, reject, contest, or request more evidence where appropriate.
- No single score may determine a high-impact action.
- Protected characteristics must not be inferred or used as performance proxies.
- Teacher intelligence must not become punitive ranking or covert surveillance.
- Learner interventions must include age, consent, accessibility, and vulnerability safeguards where relevant.
- Knowledge artifacts remain provisional, contextual, owned, reviewable, and revocable.
- Production use requires privacy, security, legal, responsible-AI, data-quality, and operational approval.

## Metrics

### Product metrics

- time to understand a case;
- decision completion rate;
- recommendation acceptance, adaptation, defer, and rejection rates;
- evidence-insufficiency rate;
- intervention completion and abandonment;
- user trust, usefulness, and contestability signals.

### Learning metrics

- proficiency progression;
- skill retention;
- completion and continuation;
- learner confidence and participation;
- transfer across contexts;
- segment consistency and equity gaps.

### Operational metrics

- queue age and service-level attainment;
- intervention capacity and cycle time;
- exception and escalation rate;
- integration freshness and reconciliation;
- model or rule evaluation pass rate;
- override, incident, and rollback rate;
- cost per reviewed case and per completed intervention.

### Business metrics

- retention and renewal association;
- support demand;
- teacher capacity and coaching leverage;
- contribution margin association;
- experiment throughput;
- time from signal to validated organizational learning.

All MVP metrics are synthetic. Association must not be labeled causal without an approved evaluation design and sufficient evidence.

## Team Model

Minimum pilot team:

- 1 product lead;
- 1 product designer or UX researcher;
- 1 learning scientist or curriculum lead;
- 1 tech lead or staff engineer;
- 1–2 frontend/full-stack engineers;
- 1 data/AI engineer;
- part-time analytics or evaluation support;
- part-time teacher/academic operations representative;
- part-time privacy, security, legal, and responsible-AI reviewers.

Named owners and allocation must be approved before implementation planning is treated as committed.

## Roadmap

### Phase 0 — Rebaseline and approval

Approve product thesis, users, domains, information architecture, MVP, governance, metrics, pilot, team, cost model, and Executive Experience treatment.

### Phase 1 — Synthetic pilot experience

Implement and validate one end-to-end frontend-first journey with synthetic data, role-aware navigation, evidence traceability, and executive module gating.

### Phase 2 — Instrumented internal pilot

Subject to new approval: connect a minimal approved dataset, add identity and audit, validate workflow usability, and establish baseline evaluations.

### Phase 3 — Controlled operational pilot

Subject to governance approval: limited users, bounded interventions, monitoring, incident response, rollback, support, and measured outcomes.

### Phase 4 — Scale by domain

Expand only where evidence supports value and controls are operationally mature.

## Time and Cost Sizing

These are planning ranges, not commitments.

### Synthetic MVP

- Duration: 6–8 weeks.
- Team: 4–6 core contributors plus part-time reviewers.
- Estimated labor: 24–40 person-weeks.
- External platform cost: near zero to low, because production services and real integrations are excluded.

### Instrumented pilot

- Duration: additional 10–16 weeks after MVP approval.
- Team: 7–10 cross-functional contributors.
- Estimated labor: 90–160 person-weeks.
- Cost drivers: identity, data contracts, integrations, evaluation, privacy/security review, audit, observability, support, and model usage.

A CFO-ready monetary estimate requires approved blended rates, staffing allocation, vendor assumptions, data-source complexity, and hosting constraints. P-000 deliberately does not invent those inputs.

## Pilot Strategy

Pilot hypothesis:

> A governed evidence-to-intervention workflow can help teachers and learning teams make faster, more explainable decisions while producing measurable learning and operational signals.

Pilot design:

- one learner segment and one instructional context;
- 5–10 representative internal users for the synthetic usability pilot;
- clearly defined baseline task and comparison workflow;
- scripted synthetic cases before any real data;
- success thresholds for comprehension, decision quality, task time, evidence traceability, trust, and accessibility;
- red-team review for surveillance, automation bias, unsupported causality, and misleading precision;
- explicit exit criteria before requesting real data or production integration.

## Executive Experience Treatment

The existing Executive Experience is retained as a strategic asset, not deleted.

Required treatment in a future approved implementation:

- remove it as the default landing experience;
- preserve existing journeys and regression coverage;
- expose it only via role entitlement, private route, or feature flag;
- label its synthetic assumptions and strategic purpose;
- prevent standard learners, teachers, or operators from discovering it through normal navigation;
- keep its architecture loosely coupled from the primary Learning Intelligence workflow;
- do not duplicate operational features inside the executive module.

## Acceptance Criteria

- **AC-01** Product vision and north-star learning loop are explicit.
- **AC-02** Primary users, accountable roles, and role boundaries are defined.
- **AC-03** Jobs to be done cover learner, teacher, intervention, evaluation, knowledge, governance, operations, and strategy needs.
- **AC-04** Functional domains and ownership boundaries are defined.
- **AC-05** Default information architecture and navigation make LIP the primary product.
- **AC-06** MVP scope defines one end-to-end synthetic journey and explicit non-goals.
- **AC-07** Frontend, backend, AI, and platform responsibilities are separated.
- **AC-08** Data entities, source-system assumptions, and integration approval requirements are documented.
- **AC-09** Evidence provenance, uncertainty, decision, override, and audit requirements are defined.
- **AC-10** Human control, contestability, privacy, anti-surveillance, and responsible-AI boundaries are explicit.
- **AC-11** Product, learning, operational, and business metrics are defined and causal claims are constrained.
- **AC-12** Minimum team and required review functions are defined.
- **AC-13** Roadmap separates synthetic MVP, instrumented pilot, controlled pilot, and scale phases.
- **AC-14** Time and labor ranges are stated with assumptions and without fabricated monetary precision.
- **AC-15** Pilot hypothesis, participants, validation method, risks, success thresholds, and exit criteria are defined.
- **AC-16** Executive Experience is retained but removed from default navigation and access-controlled.
- **AC-17** No application, backend, agent, integration, dependency, infrastructure, or production change is authorized.
- **AC-18** Feature registry and progress records identify P-000 as `spec_ready` and awaiting human approval.

## Risks

- The platform could become a collection of dashboards rather than a decision-and-learning system.
- Synthetic flows may hide real data-quality and operational complexity.
- Learner or teacher intelligence could be interpreted as surveillance.
- Recommendations may create automation bias or false precision.
- Business metrics may be mistaken for causal proof.
- Executive requirements could dominate learner and teacher usability.
- Integration scope may expand before value and governance are proven.
- Organizational memory may preserve weak or outdated findings.

## Stop Conditions

Stop and return to specification if work would require:

- application code or visual implementation before human approval;
- real learner, teacher, employee, operational, or financial data;
- backend, persistence, authentication, model calls, agents, or external integrations;
- new dependencies, infrastructure, deployment, secrets, or recurring vendor cost;
- consequential automated decisions;
- architecture outside the approved MVP boundary;
- claims of production readiness, compliance, validated economics, or causal impact;
- deletion or irreversible modification of the existing Executive Experience.

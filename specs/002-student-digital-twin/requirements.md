# Requirements — 002 Student Digital Twin

## Status

`spec_ready`

## Mode

`MVP`

## Business Goal

Demonstrate how Open English could maintain a privacy-aware, explainable learner-state model that converts observable learning signals into timely, human-owned interventions and measurable outcomes.

The experience must prove that a Student Digital Twin is not a demographic profile, generic dashboard, or opaque churn score. It is a governed decision instrument that distinguishes what the company observed, what the system inferred, what remains unknown, what action is recommended, who owns the decision, and how success will be measured.

## Core Executive Question

How can Open English understand each learner well enough to improve their trajectory without turning personalization into surveillance or unaccountable automation?

## Audience

- CEO and executive leadership
- CTO, platform, data, and AI leadership
- Product and learning-science leaders
- Teacher operations and learner-success teams
- Retention, customer experience, privacy, and compliance leaders

## Product Thesis

```text
Observed learning signals
-> Learner-state update
-> Explainable risk or opportunity
-> Candidate interventions
-> Human decision
-> Measured outcome
-> Governed memory update
```

The Student Digital Twin must model a learner's changing state, not claim to represent the learner as a person.

## Required Synthetic Scenarios

The MVP must include at least three clearly synthetic learner scenarios representing materially different learning contexts:

1. Adult professional pursuing employability or career advancement
2. Junior learner requiring age-aware and guardian-sensitive controls
3. Advanced or academic learner pursuing a specific proficiency outcome

Each scenario must have different goals, proficiency, engagement patterns, misconceptions, confidence, intervention options, and uncertainty.

Names, events, scores, and outcomes must be labeled as synthetic.

## Required Learner-State Dimensions

The experience must represent the following dimensions without implying that every field is known with certainty:

- primary learning goal;
- target outcome and target date;
- current proficiency and skill-level breakdown;
- recent engagement rhythm;
- speaking confidence or participation confidence;
- misconception or friction themes;
- content and modality preferences;
- teacher or coach observations;
- intervention history;
- retention or disengagement risk;
- model confidence and important unknowns.

The design must distinguish direct evidence, derived features, model inference, and user- or teacher-provided information.

## Required Executive Journeys

### Journey A — Learner Snapshot

A reviewer can understand the learner's objective, current state, recent momentum, and primary risk or opportunity within 30 seconds.

The snapshot must answer:

- What is the learner trying to achieve?
- Where are they now?
- What changed recently?
- What should a human pay attention to?

### Journey B — Evidence Timeline

The user can inspect a concise chronological sequence of synthetic signals such as:

- attendance and session rhythm;
- completed or abandoned learning activities;
- speaking-practice behavior;
- assessment results;
- confidence check-ins;
- teacher observations;
- previous intervention and response.

Each signal must expose its source category and whether it is observed, self-reported, teacher-reported, or derived.

### Journey C — Explainable State and Risk

The experience presents a transparent explanation of the learner-state assessment.

It must show:

- current risk or opportunity band;
- contributing factors;
- supporting evidence;
- counter-signals that reduce risk;
- confidence level;
- important unknowns;
- what the score must not be used for.

The MVP must not present a risk score as a fact, diagnosis, or causal conclusion.

### Journey D — Next-Best-Action Options

The system proposes multiple candidate interventions rather than one deterministic answer.

Candidate owners may include:

- learner self-service;
- AI practice assistant;
- teacher;
- learner-success coach;
- peer or group experience;
- support or scheduling team.

Each candidate intervention must include:

- rationale;
- expected mechanism;
- estimated effort;
- urgency;
- risk or limitation;
- validation target;
- responsible human owner.

### Journey E — Human Decision

A reviewer can select, approve, defer, or reject a candidate intervention.

The experience must make clear that:

- the model recommends;
- a human owns consequential judgment;
- rejected or deferred recommendations remain visible as decision evidence;
- no intervention is represented as autonomously executed in this MVP.

### Journey F — Counterfactual Exploration

The user can explore a bounded “what could change?” simulation by selecting an intervention or changing one controlled scenario input.

The simulation must:

- show projected directional change rather than guaranteed results;
- preserve the original evidence;
- label projections as synthetic hypotheses;
- avoid presenting correlation as causation;
- identify what would need to be measured in a real pilot.

### Journey G — Outcome and Learning Loop

The experience shows how the company would evaluate whether the intervention worked.

It must connect the intervention to:

- near-term behavioral indicator;
- learning indicator;
- confidence or experience indicator;
- retention or continuation indicator;
- decision to continue, revise, escalate, or stop.

### Journey H — Privacy and Responsible Personalization

The experience visibly communicates responsible-use boundaries.

It must include:

- data minimization;
- purpose limitation;
- age-aware controls;
- guardian-sensitive handling for junior learners;
- retention and deletion expectations;
- human review for consequential interventions;
- no use of protected characteristics for punitive decisions;
- clear distinction between support prioritization and access restriction.

## Functional Requirements

- FR-01: Add a dedicated Student Digital Twin workspace to the existing experience.
- FR-02: Include at least three selectable synthetic learner scenarios.
- FR-03: Display learner goals, target outcomes, proficiency, engagement, confidence, misconceptions, preferences, intervention history, and unknowns.
- FR-04: Display an evidence timeline with source-type labels.
- FR-05: Separate observed evidence, derived features, inference, and unknown information.
- FR-06: Display an explainable risk or opportunity assessment with positive and negative contributing factors.
- FR-07: Display model confidence and uncertainty.
- FR-08: Present at least three candidate interventions for the active scenario.
- FR-09: Show intervention rationale, owner, effort, urgency, limitation, and validation target.
- FR-10: Support approve, defer, and reject decision states in the frontend simulation.
- FR-11: Support a bounded counterfactual or projected-outcome interaction.
- FR-12: Preserve the original evidence while displaying projections.
- FR-13: Display outcome-measurement criteria and a continue, revise, escalate, or stop decision gate.
- FR-14: Display privacy and responsible-personalization guardrails.
- FR-15: Apply additional visible controls to the junior-learner scenario.
- FR-16: Preserve the existing Executive Tour and Organizational Cortex journeys.
- FR-17: Clearly label every learner, signal, score, recommendation, and projection as synthetic.
- FR-18: Remain keyboard operable and responsive.

## Non-Functional Requirements

- NFR-01: The primary Student Digital Twin journey should be explainable in four minutes or less.
- NFR-02: The active learner snapshot must be understandable in 30 seconds or less.
- NFR-03: The experience must remain a static React frontend with no real model calls or persistence.
- NFR-04: No real learner data, PII, protected characteristics, or Open English internal data may be introduced.
- NFR-05: Risk explanations must use plain language suitable for product, learning, and executive audiences.
- NFR-06: Visual hierarchy must distinguish evidence, inference, decision, projection, and validated outcome.
- NFR-07: The experience must remain legible during shared-screen presentation.
- NFR-08: Motion must respect reduced-motion preferences.
- NFR-09: Existing SPEC-000 and SPEC-001 automated journeys must continue to pass.
- NFR-10: The implementation must not imply medical, psychological, or legally consequential profiling.

## Out of Scope

- Real learner ingestion or identity resolution
- Real-time event streaming
- Production churn prediction
- Automated intervention execution
- Teacher or support notifications
- Persistent learner profiles
- Authentication or authorization
- Guardian portals or consent implementation
- Real COPPA, GDPR, GDPR-K, or FERPA compliance implementation
- Real model training, feature engineering, or MLOps
- Real causal inference
- Pricing, billing, collections, or credit-risk decisions
- Access restriction, disciplinary action, or punitive ranking
- Production experimentation platform

## Success Metrics

- A reviewer can explain the distinction between learner evidence and model inference.
- A reviewer can identify at least one important unknown in every scenario.
- A reviewer can explain why the risk assessment changed.
- A reviewer can compare multiple intervention options and identify the human owner.
- A reviewer can distinguish projected impact from validated impact.
- A reviewer can explain the additional controls required for a junior learner.
- Existing Executive Tour and Organizational Cortex interactions remain functional.
- Automated tests and responsive review pass.

## Acceptance Criteria

- AC-01: The workspace includes at least three clearly synthetic learner scenarios.
- AC-02: Each scenario contains a distinct goal, proficiency profile, engagement pattern, misconception theme, confidence state, and important unknown.
- AC-03: Learner-state information is visibly separated into evidence, derived state, inference, and unknowns.
- AC-04: The evidence timeline labels source categories and chronology.
- AC-05: Risk or opportunity assessment includes contributing factors, counter-signals, confidence, and limitations.
- AC-06: Risk language avoids diagnosis, certainty, and unsupported causal claims.
- AC-07: At least three candidate interventions are available for the active scenario.
- AC-08: Every intervention includes rationale, owner, effort, urgency, limitation, and validation target.
- AC-09: The user can approve, defer, or reject an intervention and see the selected decision state.
- AC-10: Counterfactual exploration displays a synthetic directional projection without altering original evidence.
- AC-11: Outcome criteria include behavioral, learning, experience, and retention indicators.
- AC-12: A continue, revise, escalate, or stop gate is visible.
- AC-13: Privacy, data minimization, purpose limitation, and human-review controls are visible.
- AC-14: The junior scenario visibly includes age-aware and guardian-sensitive constraints.
- AC-15: Synthetic-data and non-production disclosures are persistent and unambiguous.
- AC-16: Existing Executive Tour, Student Twin tab, Teacher Intelligence tab, Build Engine tab, and Organizational Cortex loop do not regress.
- AC-17: Automated tests cover scenario switching, evidence separation, intervention decisions, projections, responsible-use controls, and regression journeys.
- AC-18: Desktop, tablet, mobile, keyboard, and reduced-motion reviews pass.

## Approval Gate

Implementation must not begin until a human approves:

- the three learner scenarios;
- the learner-state dimensions;
- the risk and uncertainty presentation;
- the intervention-decision workflow;
- the counterfactual simulation boundaries;
- the junior-learner safeguards;
- the proposed application file boundaries.

# Design — 001 Executive AI-Native Landing

## Design Intent

Turn the current prototype into an executive argument with progressive disclosure. The page must feel like a CTO Office narrative backed by a working system, not a marketing homepage or generic dashboard.

The experience must make one point unmistakable:

> The opportunity is not to place a chatbot inside an LMS. It is to build a governed learning system where every interaction improves the learner, the teacher, the curriculum, and the company — while humans retain judgment, evidence controls promotion, and economics determine what can scale.

## Narrative Architecture

```text
1. Founding Question
2. Why Change Now
3. Current-State Hypotheses
4. AI-Native Definition
5. Product + Company Transformation
6. Future-State Operating Model
7. Strategic Choices
8. Economics, Impact, Risks, and 90 Days
9. Executive Decisions Required
```

## Experience Modes

### Explore Mode

Normal page navigation with complete sections and interactive simulations.

### Executive Tour Mode

A guided overlay or focused presentation state that:

- advances through the nine narrative stages;
- scrolls or focuses the corresponding section;
- shows stage title, progress, key message, and presenter note;
- supports previous, next, exit, Escape, and arrow-key controls;
- does not obscure essential content;
- respects reduced-motion preferences.

## Information Hierarchy

Each stage must answer one executive question:

1. What is the proposal?
2. Why is this urgent?
3. What likely prevents compounding today?
4. What does AI-native actually mean?
5. How do product and company change together?
6. What capabilities form the target operating model?
7. What do we build, integrate, and defer?
8. How do we control economics, impact, and risk?
9. What decisions are requested now?

## Research-Derived Operating Principles

The transcript findings introduce six visible principles:

```text
Flexible
Responsible
Responsive
Affordable
Adaptive
Personalized at quality and scale
```

These principles should appear as a concise operating rubric, not as decorative values.

Each principle must be connected to a concrete system behavior:

- Flexible -> multiple learner types, curricula, and delivery modes.
- Responsible -> human approval, evidence, privacy, and auditability.
- Responsive -> interventions react to current signals and outcomes.
- Affordable -> model routing, caching, deterministic logic, and selective inference.
- Adaptive -> difficulty, pace, modality, and intervention change by learner state.
- Personalized at quality and scale -> personalization improves outcomes without reducing instructional standards.

## Current-State Hypothesis Pattern

Each hypothesis card must contain:

```text
Hypothesis
Recruitment-brief signal
Business consequence
Discovery question
Confidence label: To validate
```

The design must avoid language such as “Open English currently has...” unless the statement is directly supported by the recruitment brief.

## Future-State Capability Model

The operating model will be represented as four connected layers:

### Experience Layer

- Student Experience
- Teacher Experience
- Internal AI Experiences
- Social and peer learning moments

### Intelligence Layer

- Student Digital Twin
- Teacher Intelligence
- Organizational Cortex
- AI Evaluation and Governance
- Human Approval and Escalation

### Platform Layer

- Unified Learning Platform
- Learning Graph and event signals
- Governed Curriculum Refresh Loop
- Agentic Build Engine
- Model Routing and Cost Controls

### Enterprise Systems Layer

- Salesforce
- NetSuite
- Zuora
- Yuno
- identity, compliance, and reporting systems

Enterprise systems remain systems of record. The proposed platform supplies learning intelligence and orchestration rather than replacing every enterprise capability.

## Human Agency Pattern

Every AI-assisted flow must expose these states:

```text
Evidence
-> Inference
-> Recommendation
-> Human decision
-> Outcome
-> Organizational memory update
```

The design must make clear that:

- AI does not autonomously publish curriculum changes;
- teachers and curriculum leaders retain instructional authority;
- source boundaries are visible;
- approved knowledge is versioned;
- recommendations can be accepted, rejected, or escalated;
- social learning and human relationships remain part of the target experience.

## Curriculum Refresh Pattern

The curriculum refresh loop must be shown as governed continuous learning:

```text
New evidence or content
-> Relevance screening
-> Proposed update
-> Human review
-> Controlled publication
-> Outcome measurement
```

This is distinct from autonomous content generation.

## Strategic Choice Matrix

### Build

Capabilities that create differentiated learning or organizational intelligence:

- Learning Graph
- Student Digital Twin
- Teacher Intelligence
- Organizational Cortex
- AI evaluation framework
- governed curriculum refresh
- agentic engineering controls
- impact-measurement framework

### Integrate

Systems of record and specialist infrastructure:

- Salesforce
- NetSuite
- Zuora
- Yuno
- identity providers
- model providers
- observability and security platforms

### Defer

Items that should wait for discovery or pilot evidence:

- full autonomous curriculum decisions;
- custom foundation models;
- broad legacy replacement in one release;
- persistent AI memory without governance;
- multi-region complexity before service objectives require it;
- generic LMS rebuilds that do not create differentiated learning intelligence.

## Baseline LMS versus Differentiation

A small comparison should separate table stakes from strategic differentiation.

### Table Stakes

- course management;
- user roles;
- quizzes and assessments;
- progress tracking;
- dashboards;
- payment support;
- scalable web and mobile delivery;
- recommendations and chat assistance.

### Differentiation

- learner-state models;
- teacher behavior intelligence;
- governed organizational memory;
- outcome-linked interventions;
- controlled curriculum refresh;
- evidence and approval workflows;
- model routing and AI economics;
- impact-measurement roadmap.

## Metrics Model

Metrics will be grouped into five linked categories:

1. Learning outcomes
2. Retention and customer outcomes
3. Teacher augmentation and social learning
4. Engineering and platform execution
5. Economics and operating leverage

Every displayed value must carry one status:

- Hypothesis
- Baseline required
- Pilot target
- Validated result

No value may appear as an established Open English metric in this MVP.

## Dual Evaluation Model

The design must visually separate two evaluation systems.

### Model and Platform Evidence

- groundedness;
- source adherence;
- reproducibility;
- latency;
- cost;
- evaluation pass rate;
- failure and escalation rate.

### Educational and Product Impact

- proficiency improvement;
- learning velocity;
- confidence;
- completion;
- retention;
- teacher effectiveness;
- successful remediation;
- change in learner trajectory.

A strong model score does not prove educational impact.

## Product and Impact Roadmaps

The 90-day section must present two synchronized workstreams:

### Product Roadmap

- instrumentation and domain model;
- bounded pilots;
- platform and integration decisions.

### Impact-Measurement Roadmap

- baseline definition;
- comparison or controlled cohorts;
- evidence collection;
- promotion thresholds;
- scale, revise, or stop decision.

## AI Economics Pattern

The system should communicate selective compute rather than “LLM everywhere.”

Controls include:

- deterministic rules where appropriate;
- lightweight models for narrow tasks;
- model routing by complexity and risk;
- caching and reuse;
- asynchronous processing;
- human escalation for high-risk uncertainty;
- Board-visible AI cost per lesson and cost per successful outcome.

## Risk Model

The experience will show six transformation risks:

- child safety and privacy;
- hallucination and instructional quality;
- bias and uneven intervention;
- inference economics and vendor concentration;
- employee and teacher adoption;
- platform consolidation and migration complexity.

Each risk must have an associated control principle and 90-day evidence action.

Adoption should be framed as a change-management program:

- begin with obvious pain points;
- recruit early experimenters;
- prove user-specific value;
- instrument adoption;
- scale only after workflow and outcome evidence.

## Visual Direction

Preserve the existing restrained cinematic system, with these additions:

- section numbering and a visible narrative spine;
- stronger distinction between evidence, hypothesis, decision, and validated outcome;
- architecture shown through layered flow rather than dense cloud diagrams;
- decision cards with concise Board-level language;
- tour controls designed as a presentation instrument, not a modal wizard;
- human approval moments visible inside system flows;
- baseline-versus-differentiation comparison;
- dual technical-versus-educational evaluation panel.

## Component Boundaries

Expected additions:

```text
src/components/
  ExecutiveTour.tsx
  NarrativeSection.tsx
  HypothesisCard.tsx
  OperatingPrinciples.tsx
  OperatingModel.tsx
  HumanAgencyFlow.tsx
  CurriculumRefreshLoop.tsx
  DecisionMatrix.tsx
  BaselineVsDifferentiation.tsx
  EvaluationModel.tsx
  ImpactRoadmap.tsx
  RiskRegister.tsx
  ExecutiveAsk.tsx

src/data/
  executiveNarrative.ts
```

Existing SPEC-000 implementation may be refactored into components only where it improves clarity and testability. The existing domain simulation behavior must not regress.

## State Model

```text
tourActive: boolean
activeStage: number
reducedMotion: derived preference
```

Tour stage definitions should be data-driven so the narrative can later generate blueprint sections and presenter notes.

## Verification Strategy

Required commands remain:

```text
npm run typecheck
npm test
npm run build
```

Tests must verify:

- current-state hypothesis labeling;
- future-state capabilities;
- operating principles;
- build/integrate/defer content;
- human approval and source-agency language;
- baseline LMS versus differentiation;
- dual technical and educational evaluation;
- impact roadmap and pilot gate;
- model-routing economics controls;
- tour start, navigation, exit, and progress;
- preservation of SPEC-000 interactions;
- synthetic and hypothesis disclosures.

Manual verification must include:

- desktop shared-screen readability;
- mobile and tablet layouts;
- keyboard-only tour navigation;
- reduced-motion behavior;
- five-minute standard narrative rehearsal;
- three-minute guided-tour rehearsal;
- confirmation that teachers and humans are presented as augmented, not replaced.

## Decision Required Before Implementation

Approve or amend:

- the nine-stage executive narrative;
- the expanded four-layer capability model;
- the six operating principles;
- the human-agency and curriculum-refresh patterns;
- the build/integrate/defer choices;
- the dual evaluation and impact-roadmap model;
- the six-risk model;
- guided tour as part of this feature rather than a later feature.

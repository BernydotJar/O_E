# Design — 001 Executive AI-Native Landing

## Design Intent

Turn the current prototype into an executive argument with progressive disclosure. The page must feel like a CTO Office narrative backed by a working system, not a marketing homepage or generic dashboard.

## Narrative Architecture

```text
1. Founding Question
2. Why Change Now
3. Current-State Hypotheses
4. AI-Native Definition
5. Product + Company Transformation
6. Future-State Operating Model
7. Strategic Choices
8. Economics, Risks, and 90 Days
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
8. How do we control economics and risk?
9. What decisions are requested now?

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

### Intelligence Layer

- Student Digital Twin
- Teacher Intelligence
- Organizational Cortex
- AI Evaluation and Governance

### Platform Layer

- Unified Learning Platform
- Learning Graph and event signals
- Agentic Build Engine

### Enterprise Systems Layer

- Salesforce
- NetSuite
- Zuora
- Yuno
- identity, compliance, and reporting systems

Enterprise systems remain systems of record. The proposed platform supplies learning intelligence and orchestration rather than replacing every enterprise capability.

## Strategic Choice Matrix

### Build

Capabilities that create differentiated learning or organizational intelligence:

- Learning Graph
- Student Digital Twin
- Teacher Intelligence
- Organizational Cortex
- AI evaluation framework
- agentic engineering controls

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
- multi-region complexity before service objectives require it.

## Metrics Model

Metrics will be grouped into five linked categories:

1. Learning outcomes
2. Retention and customer outcomes
3. Teacher augmentation
4. Engineering and platform execution
5. Economics and operating leverage

Every displayed value must carry one status:

- Hypothesis
- Baseline required
- Pilot target
- Validated result

No value may appear as an established Open English metric in this MVP.

## Risk Model

The experience will show six transformation risks:

- child safety and privacy;
- hallucination and instructional quality;
- bias and uneven intervention;
- inference economics and vendor concentration;
- employee and teacher adoption;
- platform consolidation and migration complexity.

Each risk must have an associated control principle and 90-day evidence action.

## Visual Direction

Preserve the existing restrained cinematic system, with these additions:

- section numbering and a visible narrative spine;
- stronger distinction between evidence, hypothesis, and decision;
- architecture shown through layered flow rather than dense cloud diagrams;
- decision cards with concise Board-level language;
- tour controls designed as a presentation instrument, not a modal wizard.

## Component Boundaries

Expected additions:

```text
src/components/
  ExecutiveTour.tsx
  NarrativeSection.tsx
  HypothesisCard.tsx
  OperatingModel.tsx
  DecisionMatrix.tsx
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
- build/integrate/defer content;
- tour start, navigation, exit, and progress;
- preservation of SPEC-000 interactions;
- synthetic and hypothesis disclosures.

Manual verification must include:

- desktop shared-screen readability;
- mobile and tablet layouts;
- keyboard-only tour navigation;
- reduced-motion behavior;
- five-minute standard narrative rehearsal;
- three-minute guided-tour rehearsal.

## Decision Required Before Implementation

Approve or amend:

- the nine-stage executive narrative;
- the four-layer capability model;
- the build/integrate/defer choices;
- the six-risk model;
- guided tour as part of this feature rather than a later feature.

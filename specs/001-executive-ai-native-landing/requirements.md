# Requirements — 001 Executive AI-Native Landing

## Status

`spec_ready`

## Mode

`MVP`

## Business Goal

Transform the existing landing into a concise executive decision narrative that a CEO, CFO, or Board member can understand in five minutes and use to evaluate the proposed AI-native transformation.

## Core Executive Question

What would Open English look like if it were founded today as one unified, AI-native learning company?

## Audience

- CEO and executive leadership
- CFO and Board
- CTO and platform leadership
- Product, learning, teacher operations, and engineering leaders

## External Evidence Incorporated

The specification incorporates decision-relevant findings from the supplied MIT J-WEL EdTech AI panel transcript. The second supplied transcript is treated as a baseline LMS feature overview rather than strategic differentiation.

Research synthesis:

- `docs/research/edtech-ai-video-transcript-findings.md`

## AI-Native Operating Principles

The proposed system must be:

- flexible across learners, curricula, channels, and delivery models;
- responsible through governance, evidence, privacy, and human accountability;
- responsive to learner behavior and organizational signals;
- affordable enough to scale access sustainably;
- adaptive in pace, difficulty, modality, and intervention;
- personalized at quality and scale rather than personalized only in appearance.

## Narrative Outcome

The experience must move the audience through a deliberate argument:

```text
Business urgency
-> Current-state hypotheses
-> AI-native definition
-> Future operating model
-> Priority use cases
-> Platform architecture
-> Economics and metrics
-> Risks and controls
-> First 90 days
-> Executive decisions required
```

## Required Executive Journeys

### Journey A — The Case for Change

Within 60 seconds the user understands:

- the proposal is not to add AI features to legacy workflows;
- the target is a unified learning company that continuously improves;
- fragmentation prevents knowledge, product signals, and operating practices from compounding;
- the transformation concerns both the learning product and the company operating model;
- standard LMS capabilities are table stakes, not the source of differentiation.

### Journey B — Current-State Hypotheses

The experience presents hypotheses derived from the recruitment brief, not claims of privileged internal knowledge:

- three learning products create duplicated platform concerns;
- student and teacher signals may remain fragmented;
- organizational knowledge can disappear across teams and employee transitions;
- manual or disconnected quality loops reduce delivery speed;
- enterprise billing, CRM, ERP, payments, identity, and compliance create cross-domain coupling;
- the company may be completing digital consolidation while also being asked to adopt AI, increasing transformation complexity.

Each hypothesis must be visibly labeled as requiring discovery validation.

### Journey C — Future-State Operating Model

The user can understand the relationship among:

- Unified Learning Platform
- Learning Graph
- Student Digital Twin
- Teacher Intelligence Platform
- Organizational Cortex
- Agentic Build Engine
- Enterprise Integration Layer
- AI Governance and Evaluation Layer
- Governed Curriculum Refresh Loop

### Journey D — Strategic Choices

The experience explains:

- what must be built as differentiated capability;
- what should remain a system of record;
- what should be integrated rather than rebuilt;
- what is intentionally deferred;
- how pilots precede platform-scale investment;
- why the most capable or expensive model should not be the default for every task.

### Journey E — Human Agency and Trust

The experience makes clear that:

- AI proposes and humans retain instructional judgment;
- teachers and curriculum leaders approve material instructional changes;
- source boundaries and evidence must be visible;
- model inference, recommendation, approval, and validated outcome are separate states;
- education remains social and AI should allocate human attention, not remove human relationships.

### Journey F — Economics and Measurement

The experience connects learning outcomes and platform execution to:

- retention;
- learning velocity;
- teacher augmentation;
- cost per lesson;
- AI cost per lesson;
- cost per successful learning outcome;
- infrastructure cost as a percentage of revenue;
- deployment frequency;
- lead time;
- evaluation coverage;
- revenue per employee.

All numbers must be labeled as hypotheses, targets, baselines required, or validated results.

The experience must distinguish:

1. model and platform benchmarks, such as groundedness, reproducibility, latency, and cost;
2. educational and product evidence, such as proficiency improvement, retention, confidence, completion, and teacher impact.

### Journey G — Impact and Experimentation

The user can understand that every AI product increment requires:

- an impact hypothesis;
- an initial baseline;
- an instrumented pilot;
- a controlled cohort or suitable comparison method;
- a promotion threshold;
- a decision to scale, revise, or stop.

The product roadmap and impact-measurement roadmap must be presented as parallel workstreams.

### Journey H — Executive Tour

A presenter can activate a guided sequence covering the complete argument without manual navigation uncertainty.

The tour must:

- contain no more than nine stages;
- identify the current stage and remaining stages;
- allow previous, next, and exit actions;
- preserve keyboard accessibility;
- conclude with explicit executive decisions requested.

## Functional Requirements

- FR-01: Add a current-state hypothesis section with discovery disclaimers.
- FR-02: Define AI-native as organizational learning, not merely LLM adoption.
- FR-03: Present AI-Native Product and AI-Native Company as two connected dimensions.
- FR-04: Visualize the future-state operating model.
- FR-05: Present build, buy, integrate, and defer decisions.
- FR-06: Present business, learning, platform, engineering, and operating metrics.
- FR-07: Present major transformation risks and control principles.
- FR-08: Preserve the existing Organizational Cortex simulation.
- FR-09: Add a guided executive-tour mode.
- FR-10: End with a 90-day plan and executive decisions required.
- FR-11: Clearly distinguish facts, hypotheses, targets, and validated results.
- FR-12: Remain responsive and keyboard operable.
- FR-13: Show explicit human-in-the-loop approval boundaries.
- FR-14: Show curriculum-controlled source agency and explainability as product capabilities.
- FR-15: Show governed continuous content refresh rather than autonomous publication.
- FR-16: Present model benchmarking and educational impact measurement separately.
- FR-17: Add an impact-measurement roadmap with pilot promotion gates.
- FR-18: Present model routing, caching, deterministic logic, and selective inference as AI-economics controls.
- FR-19: Make human augmentation and social learning explicit.
- FR-20: Present standard LMS features as baseline capability, not the AI-native thesis.

## Non-Functional Requirements

- NFR-01: The standard narrative must be explainable in five minutes.
- NFR-02: The executive-tour path should be explainable in approximately three minutes.
- NFR-03: Content must be legible from a shared-screen interview setting.
- NFR-04: No production services, proprietary assets, or real Open English data are required.
- NFR-05: Motion must support the narrative and respect reduced-motion preferences.
- NFR-06: The implementation must remain a static frontend increment.
- NFR-07: Existing SPEC-000 tests and journeys must continue to pass.
- NFR-08: Explainability language must not imply that every model or recommendation is inherently correct.
- NFR-09: Cost and access implications must be visible in the executive narrative.

## Out of Scope

- Detailed production AWS topology
- Real enterprise integration implementation
- Real financial model or business-case forecast
- Real Open English architecture assessment
- Authentication or personalization persistence
- Production analytics collection
- Student or teacher PII
- Real AI inference
- Final Board-ready PDF blueprint
- Autonomous curriculum publication
- Claims that generic LMS functionality constitutes AI-native differentiation

## Success Metrics

- A reviewer can state the transformation thesis after the first section.
- A reviewer can identify at least three discovery hypotheses without confusing them with facts.
- A reviewer can explain the future-state platform layers.
- A reviewer can distinguish build, integrate, and defer decisions.
- A reviewer can explain the human approval boundary.
- A reviewer can distinguish model quality from educational impact.
- A reviewer can describe the pilot-to-scale decision gate.
- The complete guided tour can be completed without navigation errors.
- Existing and new automated tests pass.
- Responsive review passes.

## Acceptance Criteria

- AC-01: The opening differentiates AI-native transformation from adding isolated AI or standard LMS features.
- AC-02: Current-state observations are labeled as hypotheses requiring discovery.
- AC-03: The future-state operating model includes the required capabilities and curriculum refresh loop.
- AC-04: Build, integrate, and defer decisions are explicitly visible.
- AC-05: Metrics connect learning, retention, engineering, platform cost, and operating leverage.
- AC-06: Risks include privacy, child safety, model quality, economics, adoption, and migration complexity.
- AC-07: The 30/60/90-day plan ends with measurable pilot and investment decision gates.
- AC-08: Executive tour supports start, previous, next, exit, and stage progress.
- AC-09: Existing Organizational Cortex domain interactions remain functional.
- AC-10: Automated tests cover the executive narrative and tour.
- AC-11: Responsive and keyboard reviews pass.
- AC-12: No unsupported claims about Open English internal systems are introduced.
- AC-13: Human approval, source agency, and evidence traceability are visible.
- AC-14: Model benchmarks are presented separately from educational impact evidence.
- AC-15: AI economics controls include model routing or equivalent selective-compute strategy.
- AC-16: The narrative explicitly protects the role of teachers, peers, and social learning.

## Approval Gate

Implementation must not begin until a human approves the narrative sequence, the future-state capability model, the human-agency controls, the impact-measurement model, and the executive-tour scope.

# Design — 003 Teacher Intelligence Platform

## Design Thesis

The Teacher Intelligence Platform should feel like a professional learning and coaching environment, not a performance-monitoring console.

Its central design principle is:

> Improve the system by helping teachers test evidence-backed practices, not by reducing teachers to a score.

## Experience Architecture

The feature will add a dedicated inline workspace after the Organizational Cortex section and before the economics section.

The existing compact Teacher Intelligence tab remains a concise teaser and becomes a navigation entry point to the full workspace.

## Narrative Flow

1. **Teacher snapshot** — context, strengths, outcome pattern, confidence, and important unknown.
2. **Lesson evidence** — source-labeled evidence with context and limitations.
3. **Behavior-to-outcome map** — observed behavior, associated signal, plausible mechanism, counter-evidence, and transfer limits.
4. **Coaching studio** — multiple options with teacher-owned decision states.
5. **Experiment planner** — bounded test plan, indicators, guardrails, and stop conditions.
6. **Outcome review** — multidimensional impact and decision gate.
7. **Shared practice memory** — provisional reusable guidance with context and ownership.
8. **Responsible coaching controls** — anti-surveillance and employment-decision boundaries.

## Proposed Components

```text
src/components/teacher-intelligence/
  TeacherIntelligenceWorkspace.tsx
  TeacherSelector.tsx
  TeacherSnapshot.tsx
  LessonEvidenceExplorer.tsx
  BehaviorOutcomeMap.tsx
  CoachingStudio.tsx
  CoachingOptionCard.tsx
  ExperimentPlanner.tsx
  OutcomeReview.tsx
  SharedPracticeMemory.tsx
  ResponsibleCoachingPanel.tsx
```

Implementation may consolidate components where that reduces complexity, but responsibilities must remain testable and visually distinct.

## Proposed Data Model

```ts
type EvidenceKind =
  | 'observed_lesson_event'
  | 'learner_outcome'
  | 'teacher_reported'
  | 'coach_reported'
  | 'derived_pattern'
  | 'inference'
  | 'unknown'

type CoachingDecision =
  | 'undecided'
  | 'accepted'
  | 'adapted'
  | 'deferred'
  | 'rejected'

type TeacherScenario = {
  id: string
  name: string
  context: string
  segment: string
  strengths: string[]
  outcomeSignals: string[]
  confidence: string
  importantUnknown: string
  evidence: LessonEvidence[]
  behaviorPatterns: BehaviorPattern[]
  coachingOptions: CoachingOption[]
  measurement: OutcomeMeasure[]
  safeguards: string[]
}
```

Synthetic scenario content should live in:

```text
src/data/teacherIntelligenceScenarios.ts
```

## State Design

Frontend-local state only:

- active teacher scenario;
- selected coaching option;
- decision state per coaching option;
- optional adaptation note or adapted variant;
- active experiment plan;
- synthetic outcome-review state.

Changing scenarios resets decision and experiment state to prevent cross-scenario leakage.

No state is persisted.

## Teacher Scenarios

### Elena Ruiz

Visual emphasis:

- high learner talk time;
- open-question density;
- delayed correction;
- strong confidence outcomes;
- transferability uncertainty for beginner learners.

### Marcus Thompson

Visual emphasis:

- explicit framing;
- comprehension checks;
- beginner completion;
- lower spontaneous talk time;
- uncertainty about when scaffolding should be reduced.

### Camila Santos

Visual emphasis:

- technical accuracy;
- high-quality correction;
- uneven confidence transfer;
- uncertainty about timing, interaction rhythm, and learner mix.

## Evidence Presentation

Evidence must be organized by source and confidence rather than by a single composite score.

Each evidence item displays:

- source type;
- lesson or cohort context;
- observed behavior;
- associated learner signal;
- confidence or evidence quality;
- limitation.

Inference cards must have visibly different language from observed evidence.

## Behavior-to-Outcome Map

The map must not imply a deterministic pipeline.

Recommended structure:

```text
Observed behavior
  -> associated learner signal
  -> plausible mechanism
  -> counter-evidence
  -> transferability boundary
  -> confidence / unknown
```

The map should use directional arrows only as narrative organization, with a persistent label that association is not causation.

## Coaching Studio

Each coaching card includes:

- title;
- behavior under consideration;
- rationale;
- expected mechanism;
- target segment;
- teacher effort;
- organizational support;
- duration;
- limitation;
- validation target;
- owner.

Decision controls:

- Accept for experiment
- Adapt
- Defer
- Reject

The active decision must be textually visible and exposed through accessible state.

## Experiment Planner

Selecting a coaching option produces a bounded synthetic plan.

Required fields:

- hypothesis;
- target context;
- behavior change;
- duration;
- leading indicator;
- learner-outcome indicator;
- teacher-experience indicator;
- guardrail metric;
- review owner;
- stop condition.

The experiment plan must state:

- it is a hypothesis, not a directive;
- teacher consent and adaptation are required;
- original evidence remains unchanged;
- no employment consequence follows from the simulation.

## Outcome Review

The outcome panel displays directional synthetic result options across:

- learner participation;
- learning quality;
- learner confidence;
- teacher experience;
- operational feasibility;
- consistency across segments.

Decision gates:

- Preserve
- Adapt
- Expand carefully
- Collect more evidence
- Stop

No default gate should imply success.

## Shared Practice Memory

A validated pattern can be represented as a provisional practice card with:

- practice title;
- evidence summary;
- applicable context;
- known limitations;
- confidence;
- owner;
- review date;
- guidance-not-script disclosure.

The memory card should visually connect teacher experimentation to the Organizational Cortex without claiming autonomous institutional knowledge.

## Responsible Coaching Panel

Persistent controls must include:

- not an employment decision system;
- no teacher leaderboard;
- no single performance score;
- no protected-characteristic inference;
- purpose limitation and consent expectation;
- teacher contestability;
- contextual and segment review;
- provisional, reviewable guidance.

## Visual System

- Preserve the dark cinematic visual language.
- Use warmer professional-learning accents to distinguish teacher coaching from learner-state risk.
- Avoid dashboard patterns associated with HR surveillance.
- Do not use ranking tables, podiums, red/yellow/green employee status, or percentile labels.
- Use evidence cards, coaching canvases, experiment briefs, and practice-memory artifacts.
- Maintain strong hierarchy for shared-screen use.

## Accessibility

- Teacher selector supports keyboard navigation.
- Decision controls expose state through `aria-pressed` or equivalent.
- Experiment plan changes use a polite live region.
- Confidence and evidence types are not color-only.
- Heading hierarchy remains valid.
- Mobile DOM order follows narrative order.
- Reduced-motion behavior removes nonessential transitions.

## Integration Boundaries

### May create

- `src/components/teacher-intelligence/*`
- `src/data/teacherIntelligenceScenarios.ts`
- `src/teacher-intelligence.css`
- teacher-intelligence component tests
- `progress/review_003-teacher-intelligence-platform.md`

### May modify

- `src/App.tsx`
- `src/App.test.tsx`
- `src/main.tsx`
- `src/styles.css`
- lifecycle files

### Must not modify without a new approval

- dependencies or package versions;
- build tooling beyond a necessary correction explicitly approved during review;
- backend, API, persistence, auth, deployment, or secrets;
- prior specifications;
- unrelated feature content.

## Test Strategy

Automated tests should verify:

- three teacher scenarios render;
- scenario switching resets local decisions;
- evidence categories and limitations remain visible;
- behavior association and non-causal disclosure are present;
- at least three coaching options exist per scenario;
- decision states work;
- experiment plan changes with selected option;
- responsible-use prohibitions are visible;
- shared practice memory contains context and limitations;
- existing journeys remain intact.

Manual review should verify:

- 30-second teacher snapshot;
- four-minute teacher-intelligence narrative;
- desktop, tablet, mobile;
- keyboard-only operation;
- reduced motion;
- shared-screen legibility;
- no leaderboard or surveillance interpretation;
- Executive Tour, Organizational Cortex, and Student Digital Twin regression.

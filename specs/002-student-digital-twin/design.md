# Design — 002 Student Digital Twin

## Design Intent

Create an executive-grade learner decision workspace that makes personalization inspectable. The interface should feel like a governed learning-intelligence console, not a CRM profile, surveillance dashboard, or opaque prediction product.

The core message is:

> The Student Digital Twin does not claim to know the learner. It maintains a bounded, reviewable model of the learner's current learning state so humans can choose better support and measure whether it worked.

## Experience Architecture

```text
Learner Selector
-> Learner Snapshot
-> Evidence Timeline
-> State Explanation
-> Candidate Interventions
-> Human Decision
-> Counterfactual Projection
-> Outcome Measurement
-> Responsible-Use Controls
```

## Proposed Information Layout

### 1. Workspace Header

Must display:

- `Student Digital Twin` title;
- persistent `Synthetic learner simulation` disclosure;
- active scenario name and context;
- target outcome and date;
- fast scenario selector;
- link back to the Organizational Cortex section.

### 2. Learner Snapshot

A presentation-friendly summary containing:

- primary goal;
- target outcome;
- current proficiency;
- momentum direction;
- speaking confidence;
- active risk or opportunity band;
- confidence in the assessment;
- one sentence stating the most important unknown.

The snapshot must not use a single composite score as the only representation of learner state.

### 3. State Map

Represent the learner across several dimensions:

- proficiency;
- engagement rhythm;
- confidence;
- misconception burden;
- goal alignment;
- support responsiveness.

Values may use simple bands such as `strong`, `stable`, `watch`, and `at risk` rather than false precision.

Each dimension must disclose whether it is:

- observed;
- self-reported;
- teacher-reported;
- derived;
- inferred.

### 4. Evidence Timeline

A compact chronological stream with visible source badges.

Recommended source labels:

- `Learning event`
- `Assessment`
- `Learner check-in`
- `Teacher observation`
- `Derived pattern`
- `Previous intervention`

Every timeline item should include:

- relative date or bounded synthetic date;
- event description;
- source label;
- directional effect on the current assessment;
- whether the signal is direct evidence or derived.

### 5. Explainability Panel

Use four distinct blocks:

```text
Signals increasing concern
Signals reducing concern
Important unknowns
Use limitations
```

The assessment should use a qualitative band with an optional synthetic probability range, not a precise unsupported percentage.

Example:

```text
Watch — estimated synthetic range 35–50%
Confidence: Medium
```

The interface must state that the assessment supports prioritization and experimentation, not denial of service or punitive action.

### 6. Intervention Studio

Display at least three cards per learner.

Each card includes:

- intervention title;
- proposed owner;
- why now;
- mechanism;
- learner effort;
- organizational effort;
- urgency;
- limitation or risk;
- validation target;
- decision state.

Decision states:

```text
Undecided
Approved
Deferred
Rejected
```

Only one intervention needs to be active for counterfactual simulation at a time, but all decisions remain visible.

### 7. Counterfactual Projection

The selected intervention opens a bounded projection view showing:

- current state;
- projected directional state after a defined period;
- assumptions;
- expected leading indicators;
- uncertainty;
- evidence required to validate the projection.

Projection language should use terms such as:

- `may improve`;
- `directional hypothesis`;
- `expected leading signal`;
- `requires controlled validation`.

It must never say the intervention will definitely prevent churn or cause proficiency improvement.

### 8. Measurement Plan

Display four linked categories:

1. Behavior
2. Learning
3. Experience
4. Continuation

Example indicators:

- sessions per week;
- speaking-mission completion;
- skill-specific proficiency movement;
- confidence check-in;
- next-cycle renewal or continuation intent.

The decision gate must support:

```text
Continue
Revise
Escalate
Stop
```

### 9. Responsible Personalization Drawer or Panel

Visible controls:

- synthetic-only data;
- data minimization;
- purpose limitation;
- explainability;
- human accountability;
- age-aware handling;
- retention and deletion expectation;
- prohibited punitive use.

For the junior scenario, elevate:

- guardian-sensitive communication;
- minimum necessary data;
- no open-ended persistent memory;
- teacher or guardian approval before consequential intervention;
- no social or peer recommendation that exposes learner vulnerability.

## Synthetic Learner Scenarios

### Scenario A — Maya Chen

Context:

- Adult professional
- Goal: qualify for an English-speaking customer-success role
- Target: B2 speaking readiness in six months
- Current profile: stronger reading than spontaneous speaking
- Recent pattern: declining attendance after a work-schedule change
- Primary opportunity: restore a sustainable practice rhythm
- Important unknown: whether schedule friction or confidence is the dominant constraint

Candidate interventions:

- confidence micro-mission;
- teacher outreach and schedule redesign;
- peer speaking circle.

### Scenario B — Leo Martinez

Context:

- Junior learner
- Goal: improve classroom confidence and school performance
- Target: age-appropriate speaking and comprehension growth
- Current profile: high game participation, low live-class speaking
- Recent pattern: incomplete live activities but consistent mobile practice
- Primary opportunity: transfer confidence from solo practice to supported speaking
- Important unknown: whether camera anxiety, language difficulty, or household context drives avoidance

Candidate interventions:

- teacher-led low-pressure speaking sequence;
- guardian-approved schedule and environment adjustment;
- private AI rehearsal before live participation.

Required safeguard:

No recommendation may autonomously contact, expose, rank, or penalize the junior learner.

### Scenario C — Sofia Alvarez

Context:

- Advanced learner
- Goal: obtain a target academic or professional certification score
- Target: C1-level precision in eight months
- Current profile: strong fluency with persistent grammar and pronunciation patterns
- Recent pattern: high engagement but plateauing assessment results
- Primary opportunity: targeted deliberate practice rather than more general content
- Important unknown: whether the plateau reflects assessment variance or a stable misconception cluster

Candidate interventions:

- misconception-specific practice plan;
- specialist teacher review;
- assessment recalibration and alternate evidence collection.

## Component Model

Proposed components:

```text
StudentTwinWorkspace
LearnerSelector
LearnerSnapshot
StateDimensionGrid
EvidenceTimeline
ExplainabilityPanel
InterventionStudio
InterventionCard
DecisionControl
CounterfactualPanel
MeasurementPlan
ResponsibleUsePanel
```

## Data Model

Proposed static TypeScript model:

```ts
type EvidenceSource =
  | 'learning_event'
  | 'assessment'
  | 'learner_report'
  | 'teacher_report'
  | 'derived_pattern'
  | 'previous_intervention'

type DecisionState = 'undecided' | 'approved' | 'deferred' | 'rejected'

type LearnerScenario = {
  id: string
  syntheticName: string
  context: string
  ageCategory: 'adult' | 'junior'
  goal: string
  targetOutcome: string
  targetDate: string
  snapshot: {...}
  dimensions: LearnerDimension[]
  evidence: EvidenceEvent[]
  assessment: ExplainableAssessment
  interventions: Intervention[]
  measurement: MeasurementPlan
  safeguards: string[]
}
```

The data model must preserve evidence separately from derived and inferred state.

## Interaction Model

### Scenario Switching

Selecting a learner resets:

- active intervention;
- decision states to the scenario defaults;
- counterfactual panel;
- focused timeline item.

### Intervention Decision

Selecting `Approve`, `Defer`, or `Reject` updates only local frontend state.

The interface must show:

- who would own the real decision;
- that no action has been executed;
- the current simulated decision state.

### Projection

Selecting `Explore projection` activates the chosen intervention and displays the associated synthetic projection.

Projection must not mutate the evidence timeline or current learner snapshot.

## Integration with Existing Experience

Recommended placement:

- add a primary navigation link named `Student Twin`;
- add a dedicated section after the existing Organizational Cortex simulation or immediately before the economics section;
- preserve the current compact Student Twin tab as a teaser that links or scrolls to the full workspace;
- do not add another global modal that competes with the Executive Tour;
- use an inline workspace with sticky or tabbed local navigation.

## Visual Direction

- Retain the cinematic dark system aesthetic.
- Use a lighter or contrasting decision workspace surface for dense evidence.
- Avoid medical-dashboard visual language.
- Avoid red-only risk communication.
- Use textual bands and icons in addition to color.
- Present uncertainty and unknowns with equal visual weight to recommendations.
- Make the responsible-use controls visible, not hidden in a footer.

## Accessibility

- Scenario selector must be keyboard operable.
- Timeline items must not rely on color for source type.
- Decision controls must expose selected state through text and ARIA state.
- Projection changes must be announced through an appropriate live region.
- Cards must retain logical reading order on mobile.
- Reduced motion must disable nonessential transitions.

## Testing Strategy

Automated tests must verify:

- three scenarios render and switch correctly;
- each scenario displays an important unknown;
- evidence source labels are present;
- concern factors and counter-signals remain separate;
- candidate intervention metadata is visible;
- approve, defer, and reject states work;
- projection opens without replacing original evidence;
- junior safeguards appear only where relevant or are elevated for that scenario;
- persistent synthetic-data disclosure exists;
- existing Executive Tour and Cortex domain tests continue to pass.

## File Boundaries for Implementation

### May Create

- `src/components/student-twin/StudentTwinWorkspace.tsx`
- `src/components/student-twin/LearnerSelector.tsx`
- `src/components/student-twin/LearnerSnapshot.tsx`
- `src/components/student-twin/EvidenceTimeline.tsx`
- `src/components/student-twin/ExplainabilityPanel.tsx`
- `src/components/student-twin/InterventionStudio.tsx`
- `src/components/student-twin/CounterfactualPanel.tsx`
- `src/components/student-twin/ResponsibleUsePanel.tsx`
- `src/data/studentTwinScenarios.ts`
- `src/student-twin.css`
- component test files if useful

### May Modify

- `src/App.tsx`
- `src/App.test.tsx`
- `src/styles.css`
- `feature_list.json`
- `progress/current.md`
- `progress/history.md`
- SPEC-002 reviewer artifact during review

### Must Not Modify Without New Approval

- build tooling or package dependencies;
- backend or API files;
- deployment configuration;
- authentication or secrets;
- production data schemas;
- SPEC-000 and SPEC-001 source documents;
- unrelated feature specifications.

## Risks and Controls

### Risk: Digital twin language implies surveillance

Control: Define the twin as a bounded learning-state model and visibly display purpose and prohibited uses.

### Risk: Risk score appears authoritative

Control: Use qualitative bands, confidence, counter-signals, and important unknowns.

### Risk: Junior learner profiling is unsafe

Control: Elevate age-aware, guardian-sensitive, minimum-data, and human-approval constraints.

### Risk: Recommendation becomes autonomous action

Control: Decision workflow is explicit and simulated; no action is executed.

### Risk: Projection implies causality

Control: Preserve original evidence and label the result as a directional hypothesis requiring validation.

### Risk: Scope becomes a production ML system

Control: Static synthetic frontend only; no model, backend, data ingestion, or persistence.

## Stop Conditions

Stop implementation if:

- real learner or Open English data is introduced;
- protected characteristics are proposed as risk drivers;
- autonomous punitive or access-restriction behavior is requested;
- the junior scenario lacks age-aware safeguards;
- projection language becomes causal or guaranteed;
- implementation requires new packages, backend services, persistence, or external model calls;
- SPEC-000 or SPEC-001 regression cannot be resolved within approved file boundaries.

# Tasks — 002 Student Digital Twin

## MODE

`MVP`

## FEATURE

`002-student-digital-twin`

## STATE

`spec_ready`

## SOURCE OF TRUTH

- `feature_list.json`
- `specs/002-student-digital-twin/requirements.md`
- `specs/002-student-digital-twin/design.md`
- `specs/002-student-digital-twin/tasks.md`
- `progress/current.md`
- `progress/history.md`

## FILES YOU MAY READ

- Entire repository
- Approved SPEC-000 and SPEC-001 artifacts
- Transcript research findings

## FILES YOU MAY TOUCH AFTER APPROVAL

- `src/App.tsx`
- `src/App.test.tsx`
- `src/styles.css`
- `src/student-twin.css`
- `src/data/studentTwinScenarios.ts`
- `src/components/student-twin/**`
- `feature_list.json`
- `progress/current.md`
- `progress/history.md`
- `progress/review_002-student-digital-twin.md`

## FILES YOU MUST NOT TOUCH

- package or build configuration unless separately approved
- backend, API, database, deployment, authentication, or secret files
- prior approved specifications
- unrelated feature specifications

## DO

- use synthetic learner scenarios only;
- preserve evidence, inference, uncertainty, human decision, and outcome as distinct concepts;
- support adult, junior, and advanced-learning contexts;
- make privacy and age-aware safeguards visible;
- preserve all existing journeys;
- run typecheck, tests, build, development runtime, responsive, keyboard, and reduced-motion verification.

## DO NOT

- add real data;
- add external model calls;
- add persistence;
- add packages;
- implement punitive or autonomous decisions;
- present projections as causal or guaranteed;
- imply production compliance.

## Implementation Tasks

### T-01 — Create Static Domain Model

Create typed synthetic data for three learner scenarios.

Verification:

- learner state separates evidence from inference;
- every scenario contains important unknowns;
- junior scenario contains elevated safeguards.

### T-02 — Create Student Twin Workspace Shell

Create the dedicated workspace, title, persistent disclosure, local navigation, and scenario selector.

Verification:

- all scenarios are keyboard-selectable;
- active scenario is clearly announced;
- layout is presentation-ready.

### T-03 — Implement Learner Snapshot

Display goals, target date, proficiency, momentum, confidence, assessment band, model confidence, and primary unknown.

Verification:

- understandable within 30 seconds;
- no single opaque score dominates the view.

### T-04 — Implement State Dimensions

Display proficiency, engagement, confidence, misconception burden, goal alignment, and support responsiveness.

Verification:

- source or derivation label visible for each dimension;
- color is not the only state indicator.

### T-05 — Implement Evidence Timeline

Display chronological evidence with source category and directional contribution.

Verification:

- source labels are text-visible;
- direct and derived signals remain distinguishable.

### T-06 — Implement Explainability Panel

Display concern factors, counter-signals, unknowns, confidence, and use limitations.

Verification:

- no diagnostic or causal language;
- prioritization-only boundary visible.

### T-07 — Implement Intervention Studio

Display at least three candidate interventions with full metadata.

Verification:

- rationale, owner, effort, urgency, limitation, and validation target present;
- owners vary across human and AI-assisted workflows.

### T-08 — Implement Human Decision Controls

Support approve, defer, and reject states.

Verification:

- current state is visible in text and ARIA state;
- no action is represented as executed;
- switching learners resets local decisions appropriately.

### T-09 — Implement Counterfactual Projection

Display bounded projected changes for the selected intervention.

Verification:

- original evidence remains unchanged;
- assumptions and uncertainty visible;
- projection is labeled synthetic and directional.

### T-10 — Implement Measurement Plan

Display behavior, learning, experience, continuation, and decision gate categories.

Verification:

- continue, revise, escalate, and stop are visible;
- projected and validated outcomes remain separate.

### T-11 — Implement Responsible-Use Controls

Display privacy, minimization, purpose, age-aware, retention, and prohibited-use controls.

Verification:

- junior safeguards are elevated;
- protected-characteristic and punitive-use boundaries are explicit.

### T-12 — Integrate with Existing Narrative

Add navigation and contextual entry from the existing Student Twin teaser without disrupting the Executive Tour.

Verification:

- existing hero, tour, Cortex, economics, roadmap, and decisions sections remain usable;
- no competing global modal is introduced.

### T-13 — Add Automated Tests

Cover AC-01 through AC-17 where frontend automation is appropriate.

Minimum tests:

- scenario switching;
- important unknowns;
- evidence source labels;
- explainability separation;
- intervention metadata;
- approve, defer, reject;
- projection behavior;
- junior safeguards;
- synthetic disclosure;
- existing Executive Tour and Cortex regressions.

### T-14 — Run Verification

Execute:

```text
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

Manual review:

- desktop;
- tablet;
- mobile;
- keyboard-only;
- reduced motion;
- four-minute Student Twin narrative;
- 30-second learner snapshot;
- shared-screen legibility;
- no surveillance, diagnosis, certainty, or punitive framing.

### T-15 — Produce Reviewer Evidence

Create `progress/review_002-student-digital-twin.md` with AC-01 through AC-18 traceability.

## OUTPUT

After implementation and verification:

- changed-file summary;
- verification evidence;
- acceptance-criterion traceability;
- unresolved risks;
- reviewer recommendation.

## STOP

Stop after specification creation. Do not implement application code until explicit human approval is recorded.

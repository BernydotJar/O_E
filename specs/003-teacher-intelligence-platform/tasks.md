# Tasks — 003 Teacher Intelligence Platform

## Gate

No application code may change until this specification is explicitly approved and merged.

## T-01 — Establish synthetic teacher scenarios

- Create Elena Ruiz, Marcus Thompson, and Camila Santos scenario data.
- Include context, segment, strengths, outcomes, evidence confidence, limitations, and important unknowns.
- Confirm all content is synthetic and non-production.

## T-02 — Build teacher selector and snapshot

- Add accessible scenario selection.
- Show context, learner segment, strengths, outcome pattern, evidence confidence, behavior under consideration, and important unknown.
- Reset local decision and experiment state on scenario change.

## T-03 — Build lesson evidence explorer

- Show source type, lesson context, observed behavior, associated learner signal, confidence, and limitation.
- Visually distinguish observed evidence, reports, derived patterns, inference, and unknowns.

## T-04 — Build behavior-to-outcome map

- Show observed behavior, associated outcome, plausible mechanism, counter-evidence, transferability boundary, confidence, and unknowns.
- Include persistent non-causal disclosure.

## T-05 — Build coaching studio

- Provide at least three options per scenario.
- Include behavior, rationale, mechanism, target segment, effort, organizational support, duration, limitation, validation target, and owner.

## T-06 — Add teacher-owned decisions

- Support accepted for experiment, adapted, deferred, and rejected states.
- Make state visible and accessible.
- State explicitly that no recommendation is executed automatically.

## T-07 — Build bounded experiment planner

- Generate a synthetic plan for the selected option.
- Include hypothesis, target context, behavior change, duration, leading indicator, learner outcome, teacher experience, guardrail, owner, and stop condition.
- Preserve original evidence.

## T-08 — Build outcome review

- Show learner behavior, learning quality, learner experience, teacher experience, feasibility, and segment consistency.
- Provide preserve, adapt, expand carefully, collect more evidence, and stop gates.

## T-09 — Build shared practice memory

- Show evidence summary, applicable context, limitations, confidence, owner, and review date.
- Label the practice as provisional guidance, not a universal script.

## T-10 — Build responsible coaching panel

- Prohibit opaque scoring, leaderboards, punitive ranking, and employment decisions.
- Show teacher agency, contestability, purpose limitation, consent expectations, and contextual interpretation.

## T-11 — Integrate with existing experience

- Link the compact Teacher Intelligence Cortex tab to the full workspace.
- Preserve Executive Tour, Organizational Cortex, Student Digital Twin, economics, roadmap, and executive-decision journeys.

## T-12 — Add responsive and accessibility behavior

- Validate desktop, tablet, and mobile layouts.
- Support keyboard-only operation.
- Respect reduced-motion preferences.
- Ensure text labels do not rely on color.
- Validate shared-screen legibility.

## T-13 — Add automated tests

Cover:

- scenario rendering and switching;
- state reset;
- evidence separation;
- coaching option metadata;
- decision states;
- experiment plan selection;
- non-causal language;
- responsible-use controls;
- shared practice memory;
- existing-journey regression.

## T-14 — Run verification

```text
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

## T-15 — Run manual review

- 30-second teacher snapshot
- Four-minute teacher-intelligence narrative
- Desktop, tablet, mobile
- Keyboard-only controls
- Reduced motion
- Screen-sharing legibility
- No leaderboard or surveillance interpretation
- Executive Tour regression
- Organizational Cortex regression
- Student Digital Twin regression

## T-16 — Produce reviewer evidence

Create:

```text
progress/review_003-teacher-intelligence-platform.md
```

Trace AC-01 through AC-18, verification evidence, manual evidence, boundary compliance, residual risks, and merge recommendation.

## Definition of Done

- Approved requirements and design are implemented within file boundaries.
- Automated and manual verification pass.
- Reviewer artifact recommends merge.
- Implementation PR is merged.
- Feature status is `done`.
- Implementation branch is deleted.

# Requirements — 003 Teacher Intelligence Platform

## Status

`spec_ready` after human review and approval of this specification PR.

## Product Intent

Create an executive-grade, frontend-only simulation showing how observable teaching behaviors can become explainable coaching recommendations, controlled experiments, and measurable learning outcomes without reducing teachers to opaque scores or punitive rankings.

The feature must demonstrate a governed teacher-improvement loop:

```text
Lesson evidence -> behavior pattern -> contextual interpretation -> coaching option -> teacher decision -> bounded experiment -> learner outcome -> shared practice memory
```

## Business Goal

Demonstrate how Open English could improve teacher effectiveness at scale by converting high-quality lesson evidence into reusable, context-aware coaching while preserving teacher agency, professional dignity, instructional diversity, and explicit human accountability.

## Non-Goals

This MVP must not:

- rank teachers for compensation, scheduling, promotion, discipline, or termination;
- claim that correlation proves teaching causality;
- infer personality, motivation, mental state, or protected characteristics;
- standardize teacher personality or force one teaching style;
- use real teacher, learner, Open English, or production data;
- create production surveillance, recording, consent, HR, compliance, or labor-policy claims;
- call external models, persist decisions, or execute coaching actions;
- replace teacher, academic-lead, learning-science, or HR judgment.

## Primary Users

1. **Teacher** — understands evidence, chooses whether to test a coaching recommendation, and reflects on results.
2. **Academic lead or coach** — reviews context, supports experimentation, and prevents simplistic performance conclusions.
3. **Learning science or curriculum lead** — evaluates whether observed behaviors generalize and whether learner outcomes improve.
4. **Executive** — sees how teacher augmentation connects to learning quality, retention, operational leverage, and responsible AI.

## Required Synthetic Scenarios

The platform must include three clearly synthetic teacher scenarios with different strengths, contexts, uncertainties, and coaching needs.

### Scenario A — Elena Ruiz: high-engagement conversation teacher

- Strong learner participation and confidence outcomes.
- High open-question density and delayed correction.
- Potential concern: technique may work differently for beginner cohorts.
- Important unknown: whether the outcome is driven by behavior, cohort composition, or teacher experience.

### Scenario B — Marcus Thompson: structured beginner specialist

- Strong completion and comprehension outcomes for A1/A2 learners.
- Clear lesson framing, frequent comprehension checks, and lower spontaneous talk time.
- Potential concern: structure may become over-scaffolding for advancing learners.
- Important unknown: when to reduce support without harming confidence.

### Scenario C — Camila Santos: technically strong but uneven confidence transfer

- Accurate explanations and strong correction quality.
- Learner performance improves, but participation confidence varies.
- Potential concern: correction timing and interaction rhythm may inhibit some learners.
- Important unknown: whether confidence variance is attributable to technique, learner mix, or lesson format.

## Required Teacher-State Dimensions

Each scenario must include:

- teaching context and learner segment;
- observed strengths;
- learner outcome signals;
- lesson interaction patterns;
- teacher-reported intent or reflection;
- coach or academic-lead observations;
- evidence confidence;
- contextual limitations;
- candidate behavior to preserve;
- candidate behavior to test;
- important unknowns;
- intervention history or experiment status.

## Evidence Categories

The interface must explicitly distinguish:

- **Observed lesson event** — directly represented synthetic interaction or timing evidence.
- **Learner outcome** — synthetic learning, confidence, completion, or continuation signal.
- **Teacher-reported** — stated instructional intent or reflection.
- **Coach-reported** — human observation or review.
- **Derived pattern** — aggregation or calculated relationship.
- **Inference** — bounded interpretation requiring validation.
- **Unknown** — missing context that prevents stronger conclusions.

## Required User Journeys

### 1. Thirty-second teacher snapshot

A reviewer must understand within 30 seconds:

- who the teacher serves;
- what appears to work;
- what outcome is improving or uneven;
- which behavior is under consideration;
- how confident the evidence is;
- what remains unknown.

### 2. Lesson evidence explorer

The workspace must show a chronological or structured lesson-evidence view with:

- event or evidence label;
- source category;
- learner segment or lesson context;
- observed behavior;
- associated outcome signal;
- limitation or confidence note.

### 3. Behavior-to-outcome map

The interface must distinguish:

- behavior observed;
- outcome associated;
- plausible mechanism;
- counter-evidence;
- transferability constraints;
- confidence and unknowns.

No behavior may be presented as universally effective.

### 4. Coaching studio

Each teacher must have at least three candidate coaching options. Options may include:

- preserve and scale an effective behavior;
- adapt a behavior for a different learner segment;
- run a bounded instructional experiment;
- request peer observation;
- request specialist or academic-lead review;
- stop or reject a recommendation due to insufficient evidence.

Each option must include:

- behavior under consideration;
- rationale;
- expected mechanism;
- target learner segment;
- teacher effort;
- organizational support required;
- risk or limitation;
- validation target;
- experiment duration;
- owner.

### 5. Teacher-owned decision

The teacher or coach must be able to represent:

- undecided;
- accepted for experiment;
- adapted;
- deferred;
- rejected.

The UI must clearly state that no recommendation is executed automatically.

### 6. Bounded experiment plan

The selected coaching option must produce a synthetic experiment plan with:

- hypothesis;
- cohort or lesson context;
- behavior change;
- duration;
- leading indicator;
- learner-outcome indicator;
- guardrail metric;
- review owner;
- stop condition.

### 7. Outcome review

The interface must support a synthetic post-experiment review across:

- learner behavior;
- learning quality;
- learner confidence or experience;
- teacher experience;
- operational feasibility;
- equity or segment consistency.

The decision gate must be:

- preserve;
- adapt;
- expand carefully;
- collect more evidence;
- stop.

### 8. Shared practice memory

The platform must show how a validated pattern could become reusable organizational knowledge with:

- evidence summary;
- applicable context;
- known limitations;
- confidence level;
- review date;
- responsible owner;
- explicit statement that it is guidance, not a mandatory universal script.

## Responsible-Use Requirements

The workspace must visibly state:

- coaching support is not an employment decision system;
- no opaque teacher score is used;
- no protected characteristic is a performance driver;
- teachers retain the ability to contest, adapt, defer, or reject recommendations;
- lesson evidence requires purpose limitation and appropriate consent in a real system;
- no single metric is sufficient for consequential evaluation;
- learner outcomes must be interpreted by segment and context;
- validated practices remain provisional and reviewable.

## Visual and Interaction Requirements

- Preserve the cinematic executive aesthetic established by SPEC-001 and SPEC-002.
- Use a professional coaching-workspace visual language, not an HR surveillance dashboard.
- Avoid red-only risk communication and leaderboard patterns.
- Use textual evidence and confidence labels in addition to color.
- Scenario selection and decision controls must be keyboard accessible.
- Reduced-motion preferences must be respected.
- Mobile order must preserve narrative logic.
- The workspace must remain legible during screen sharing.

## Integration Requirements

- The compact Teacher Intelligence tab in the Organizational Cortex must link or scroll to the full workspace.
- Existing Executive Tour, Organizational Cortex, Student Digital Twin, economics, roadmap, and executive-decision journeys must remain functional.
- The implementation must remain frontend-only and synthetic.

## Acceptance Criteria

### AC-01
Three distinct synthetic teacher scenarios are available and clearly labeled non-production.

### AC-02
Each scenario includes context, strengths, learner outcomes, interaction patterns, evidence confidence, limitations, and important unknowns.

### AC-03
Observed lesson events, learner outcomes, teacher reports, coach reports, derived patterns, inferences, and unknowns are visibly separated.

### AC-04
The lesson evidence explorer exposes source, context, behavior, associated outcome, confidence, and limitation.

### AC-05
The behavior-to-outcome map shows plausible mechanism, counter-evidence, transferability constraints, confidence, and unknowns.

### AC-06
The interface states that association does not prove causality and that no behavior is universally effective.

### AC-07
Each scenario provides at least three candidate coaching options.

### AC-08
Every coaching option includes rationale, mechanism, target segment, effort, support required, limitation, validation target, duration, and owner.

### AC-09
Teacher-owned decision states include accepted for experiment, adapted, deferred, and rejected.

### AC-10
No coaching recommendation is represented as automatically executed.

### AC-11
A selected option produces a bounded experiment plan with hypothesis, context, duration, indicators, guardrail, owner, and stop condition.

### AC-12
Outcome review covers learner behavior, learning quality, learner experience, teacher experience, feasibility, and segment consistency.

### AC-13
Outcome gates include preserve, adapt, expand carefully, collect more evidence, and stop.

### AC-14
Shared practice memory includes evidence, context, limitations, confidence, owner, and review date.

### AC-15
The interface prohibits opaque scoring, punitive ranking, and automated employment decisions.

### AC-16
Teacher agency, contestability, purpose limitation, consent expectations, and contextual interpretation are visible.

### AC-17
Automated tests cover scenario switching, evidence separation, coaching metadata, decision states, experiment planning, responsible-use controls, and regression of existing journeys.

### AC-18
Desktop, tablet, mobile, keyboard, reduced-motion, screen-sharing, and narrative reviews pass.

## Risks

- Behavior correlation may be mistaken for causality.
- A coaching interface may be perceived as performance surveillance.
- Synthetic metrics may appear more precise than the evidence supports.
- High-performing behavior may not transfer across proficiency levels or learner contexts.
- A single teaching style may be unintentionally privileged.
- Teacher agency may appear nominal if rejection or adaptation is not meaningful.

## Stop Conditions

Implementation must stop and return to specification if it requires:

- real teacher or learner data;
- recording, transcript ingestion, consent workflows, or production analytics;
- HR, compensation, scheduling, discipline, or employment-decision logic;
- backend, persistence, authentication, or external model calls;
- package additions or build-system changes;
- changes outside approved frontend file boundaries;
- claims of causal impact, compliance, or production readiness.

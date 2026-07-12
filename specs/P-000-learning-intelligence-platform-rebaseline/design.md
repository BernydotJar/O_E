# Design — P-000 Learning Intelligence Platform Rebaseline

## Design Thesis

The repository must be reoriented from an executive transformation narrative into a role-aware Learning Intelligence product. The primary experience should help learners, teachers, academic teams, product teams, and operators move from evidence to governed action and measured learning.

The existing Executive Experience remains valuable, but becomes a private strategic module instead of the product shell.

## Product Architecture

```text
Learning Intelligence Platform
├── Experience layer
│   ├── Learner intelligence
│   ├── Teacher intelligence
│   ├── Intervention workspace
│   ├── Outcomes and evaluation
│   ├── Organizational knowledge
│   └── Operations
├── Decision and workflow layer
│   ├── Evidence review
│   ├── Human decisions
│   ├── Intervention lifecycle
│   ├── Experiment lifecycle
│   └── Governance gates
├── Intelligence layer
│   ├── Rules and derived signals
│   ├── Retrieval and summarization
│   ├── Recommendations
│   └── Evaluations
├── Data layer
│   ├── Domain records
│   ├── Evidence and provenance
│   ├── Outcomes
│   └── Audit events
└── Platform layer
    ├── Identity and authorization
    ├── Feature flags
    ├── Integration runtime
    ├── Observability
    └── Security and operations
```

P-000 defines the boundaries. It does not authorize implementation of these layers.

## Experience Model

The default landing experience should answer four questions:

1. What learning situations require attention?
2. What evidence supports that conclusion?
3. Which human decisions or reviews are pending?
4. What outcomes and organizational learning are emerging?

Recommended primary shell:

```text
Global header
├── Product identity: Learning Intelligence
├── Search / command entry
├── Assigned reviews
├── Notifications
└── Profile / role

Primary navigation
├── Home
├── Learners
├── Teachers
├── Interventions
├── Outcomes
├── Knowledge
└── Operations
```

Role-gated utilities:

```text
Administration
Governance
Integrations
Executive Experience
```

## Canonical End-to-End Journey

The first implementation specification should preserve this narrative order:

1. **Situation** — a clearly synthetic learner case and instructional context.
2. **Evidence** — observable events, reports, derived signals, uncertainty, and missing information.
3. **Interpretation** — bounded hypotheses, not conclusions presented as facts.
4. **Options** — multiple interventions with mechanism, effort, risk, owner, and validation target.
5. **Human decision** — accept, adapt, defer, reject, or request more evidence.
6. **Experiment** — cohort, duration, indicators, guardrails, stop condition, and review owner.
7. **Outcome review** — learning, experience, equity, teacher, operations, and business signals.
8. **Knowledge candidate** — provisional reusable guidance with scope, limits, owner, and review date.
9. **Audit evidence** — source lineage, versions, decisions, overrides, and timestamps.

## Role-Aware Home

The future home should adapt emphasis, not truth, by role:

- Learner: goals, progress, recommendations, consent, and support.
- Teacher: assigned learners or cohorts, evidence reviews, intervention decisions, and experiments.
- Academic lead: coaching queue, evidence quality, segment patterns, and escalation.
- Product/learning: experiment portfolio, outcomes, hypotheses, and knowledge candidates.
- Operations: queues, service levels, capacity, exceptions, and failed workflows.
- Executive: strategic portfolio metrics only through the private module.

The MVP may simulate role selection locally. Production identity and authorization require a later SHIP specification.

## Domain Boundaries

### Learner Intelligence owns

- learner state presentation;
- goals and proficiency context;
- learner evidence and uncertainty;
- intervention history and learner outcome review.

It must not own teacher employment evaluation, billing decisions, or autonomous outreach.

### Teacher Intelligence owns

- lesson evidence and reflection;
- instructional hypotheses;
- coaching options and teacher decisions;
- bounded practice experiments.

It must not own ranking, compensation, scheduling, discipline, or termination decisions.

### Intervention Management owns

- intervention definition and lifecycle;
- assignment, capacity, status, guardrails, and stop conditions;
- connection between decision and outcome.

It must not infer that completion equals effectiveness.

### Outcomes and Evaluation owns

- metric definitions;
- baseline and comparison design;
- quality and causal-strength labeling;
- segment and guardrail analysis.

It must not convert association into causal language without approved methodology.

### Organizational Memory owns

- reviewed findings and evidence packages;
- applicability boundaries;
- ownership, review dates, supersession, and deprecation.

It must not treat generated summaries as validated knowledge.

### Governance and Audit owns

- policy decisions;
- model/rule/prompt versions;
- access, overrides, incidents, and evidence lineage.

It must not become a decorative compliance page disconnected from workflows.

## Conceptual Data Model

```text
Learner 1---* Enrollment *---1 Course
Learner 1---* Interaction
Teacher 1---* Lesson
Lesson 1---* Interaction
Interaction 1---* EvidenceItem
EvidenceItem *---* Signal
Signal *---* Hypothesis
Hypothesis 1---* Recommendation
Recommendation 1---* HumanDecision
HumanDecision 1---0..* Intervention
Intervention 1---0..1 Experiment
Experiment 1---* OutcomeMeasure
OutcomeMeasure *---1 Evaluation
Evaluation 0..*---0..* KnowledgeArtifact
PolicyDecision / AuditEvent reference every material transition
```

Important separations:

- evidence is immutable or correction-versioned;
- hypotheses are not evidence;
- recommendations are not decisions;
- decisions are not interventions;
- intervention completion is not outcome success;
- knowledge candidates are not validated organizational memory until reviewed.

## Evidence Contract

A future evidence object should support at least:

```text
id
subject_type / subject_id
source_type / source_reference
observed_at / received_at
permitted_purpose
content_or_measure
confidence_or_quality
transformation_lineage
created_by
sensitivity
retention_policy
correction_or_supersession_reference
```

A future AI-assisted artifact should additionally record:

```text
model_or_rule_version
prompt_or_policy_version
input_evidence_ids
output_type
uncertainty
known_limitations
evaluation_result
human_reviewer
human_decision
```

## AI Architecture Principles

- Start deterministic where rules are sufficient.
- Use retrieval only from approved, access-controlled sources.
- Require structured outputs for workflow decisions.
- Separate generation from evaluation.
- Version prompts, policies, models, and evaluation datasets.
- Do not let an LLM directly create consequential state transitions.
- Provide abstention and insufficient-evidence behavior.
- Evaluate quality by task and segment, not aggregate accuracy alone.
- Monitor drift, failure modes, override patterns, latency, and cost.
- Keep a non-AI fallback for critical workflows.

## Human-Control Pattern

```text
AI or rule proposes
-> system exposes evidence and uncertainty
-> authorized human reviews
-> human accepts / adapts / defers / rejects / requests evidence
-> system records rationale
-> bounded workflow executes
-> outcomes are reviewed
-> finding may become provisional knowledge
```

No later implementation may collapse proposal, decision, and execution into one opaque action without a new approved specification.

## Executive Experience Isolation

Preferred design:

```text
/app/*                         primary Learning Intelligence routes
/strategic/executive/*         private strategic routes
```

Equivalent route structures are acceptable if these conditions hold:

- standard navigation does not expose the executive module;
- direct access requires entitlement or a controlled feature flag;
- the primary root route resolves to Learning Intelligence;
- shared visual primitives may be reused, but workflow state is not coupled;
- regression tests preserve existing executive narratives;
- no strategic simulation is mistaken for an operational source of truth.

## Delivery Architecture by Phase

### Synthetic MVP

- existing frontend stack;
- synthetic typed data;
- local interaction state;
- no new packages unless separately approved;
- no external requests;
- explicit non-production disclosures;
- automated and manual regression review.

### Instrumented pilot

Requires a new approved specification for:

- identity and role enforcement;
- domain API contracts;
- persistence and audit log;
- integration adapters;
- model gateway and evaluation service;
- telemetry and operational dashboards;
- privacy, security, legal, and responsible-AI controls.

### Controlled production pilot

Requires SHIP gates for:

- threat model and access review;
- data retention and deletion;
- reliability, backup, recovery, and rollback;
- model and workflow monitoring;
- incident response and support;
- accessibility and localization;
- cost controls and vendor failure behavior;
- pilot exit and shutdown criteria.

## Information Architecture Decisions

1. Organize navigation by user work and learning domains, not by AI capabilities.
2. Keep evidence available contextually through drawers or linked views rather than repeating it everywhere.
3. Represent decisions and workflow status with text, not color alone.
4. Separate operational views from strategic portfolio views.
5. Make uncertainty and missing evidence first-class interface elements.
6. Avoid dashboards that optimize for visual density over decision clarity.
7. Preserve a coherent mobile order that follows the evidence-to-outcome narrative.

## Accessibility and Localization Baseline

Every future implementation specification must include:

- keyboard-complete workflows;
- valid focus management and semantic headings;
- screen-reader labels and status announcements;
- reduced-motion behavior;
- non-color evidence, confidence, and status distinctions;
- responsive mobile and shared-screen layouts;
- English and Spanish content resilience;
- locale-aware dates, numbers, and proficiency terminology;
- accessible explanations for AI-assisted outputs.

## Verification Strategy for P-000

Because P-000 is specification-only, verification consists of:

1. confirm `requirements.md`, `design.md`, and `tasks.md` exist;
2. confirm all eighteen acceptance criteria are represented;
3. confirm `feature_list.json` contains one `P-000` entry in `spec_ready`;
4. confirm no feature is active in `approved`, `in_progress`, or `review`;
5. confirm progress records name the human approval gate;
6. inspect the branch diff and confirm no application, package, lockfile, environment, deployment, or secret file changed;
7. confirm no implementation task is marked complete;
8. open a draft PR for human review.

## Files You May Read

- `README.md`
- `AGENTS.md`
- `RTK.md`
- `feature_list.json`
- `progress/**`
- `specs/**`
- `docs/**`
- `adr/**`
- application files only for orientation, not modification.

## Files You May Touch

- `README.md` current-state section only;
- `feature_list.json`;
- `progress/current.md`;
- `progress/history.md`;
- `specs/P-000-learning-intelligence-platform-rebaseline/**`.

## Files You Must Not Touch

- `src/**`;
- `apps/**`;
- `packages/**`;
- application tests and styles;
- package manifests and lockfiles;
- environment files and secrets;
- CI/CD and deployment configuration;
- infrastructure;
- prior feature specifications and reviewer artifacts.

## Architecture Decision Gate

Human approval must explicitly confirm:

- LIP as the primary product shell;
- the seven-item primary navigation;
- the first synthetic end-to-end journey;
- domain and layer boundaries;
- the Executive Experience isolation pattern;
- synthetic MVP versus instrumented-pilot boundary;
- planning ranges and team assumptions;
- governance and causal-claim constraints.

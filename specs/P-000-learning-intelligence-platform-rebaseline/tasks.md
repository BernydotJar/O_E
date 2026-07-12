# Tasks — P-000 Learning Intelligence Platform Rebaseline

## Gate

No application code, new product screen, backend service, agent, integration, dependency, infrastructure, or production change may begin until this specification is explicitly approved.

## Specification Tasks

### S-01 — Define product vision and north-star loop

- [x] Establish Learning Intelligence Platform as the primary product.
- [x] Define the evidence-to-outcome organizational learning loop.
- [x] State product outcomes and non-goals.

### S-02 — Define users, roles, and jobs to be done

- [x] Define learner, teacher, academic, product, operational, platform, governance, and executive roles.
- [x] Define accountable role boundaries.
- [x] Define core jobs to be done across the product lifecycle.

### S-03 — Define functional domains

- [x] Define Learner Intelligence.
- [x] Define Teacher Intelligence.
- [x] Define Intervention and Experiment Management.
- [x] Define Outcomes and Evaluation.
- [x] Define Organizational Memory.
- [x] Define Operations and Case Management.
- [x] Define AI Governance and Audit.
- [x] Define Platform Administration.
- [x] Define the private Strategic Executive Experience.

### S-04 — Define information architecture and navigation

- [x] Define default primary navigation.
- [x] Define contextual and administrative navigation.
- [x] Remove Executive Experience from standard navigation by requirement.
- [x] Define role-aware home behavior.

### S-05 — Define MVP scope and boundaries

- [x] Define one synthetic end-to-end pilot journey.
- [x] Define required MVP capabilities.
- [x] Define explicit non-goals.
- [x] Separate frontend, backend, AI, and platform responsibilities.

### S-06 — Define data and integration assumptions

- [x] Identify potential source systems.
- [x] Define canonical conceptual entities.
- [x] Require separate data contracts and approvals for integrations.
- [x] Prohibit real data in the synthetic MVP.

### S-07 — Define evidence, audit, and governance requirements

- [x] Define evidence provenance and AI artifact traceability.
- [x] Separate evidence, derived signal, hypothesis, decision, outcome, and unknown.
- [x] Define human control and contestability.
- [x] Define privacy, anti-surveillance, causal-claim, and responsible-AI boundaries.

### S-08 — Define metrics, team, roadmap, sizing, and pilot

- [x] Define product, learning, operational, and business metrics.
- [x] Define minimum pilot team.
- [x] Define four delivery phases.
- [x] Provide time and labor ranges without fabricated monetary precision.
- [x] Define pilot hypothesis, validation approach, risks, and exit criteria.

### S-09 — Define Executive Experience treatment

- [x] Preserve the existing module.
- [x] Require it to stop being the default landing experience.
- [x] Require private route, entitlement, or feature-flag control.
- [x] Require regression protection and loose coupling.

### S-10 — Define acceptance criteria and stop conditions

- [x] Define AC-01 through AC-18.
- [x] Define risks.
- [x] Define stop conditions for implementation, real data, architecture expansion, and unsupported claims.

## Lifecycle and Documentation Tasks

### L-01 — Register P-000

- [x] Add `P-000-learning-intelligence-platform-rebaseline` to `feature_list.json`.
- [x] Set status to `spec_ready`.
- [x] Preserve deferred features `004` and `005` as pending.

### L-02 — Update progress records

- [x] Set P-000 as the current specification awaiting human approval.
- [x] Record the `pending -> spec_ready` transition.
- [x] State the exact human gate and implementation prohibition.

### L-03 — Align repository current state

- [x] Update README current-state text to identify Learning Intelligence Platform as the primary direction.
- [x] Preserve existing historical and implementation evidence.

## Verification Tasks

### V-01 — Structural verification

- [ ] Confirm `requirements.md`, `design.md`, and `tasks.md` are present and complete.
- [ ] Confirm the feature registry JSON remains valid.
- [ ] Confirm all statuses use allowed lifecycle values.
- [ ] Confirm P-000 is the only `spec_ready` rebaseline feature.

### V-02 — Acceptance-criteria traceability

- [ ] Trace AC-01 through AC-18 to requirements and design sections.
- [ ] Confirm every requested P-000 topic is covered.
- [ ] Confirm tasks do not mark implementation work complete.

### V-03 — Boundary verification

- [ ] Inspect changed files.
- [ ] Confirm no application, package, dependency, lockfile, environment, deployment, infrastructure, or secret file changed.
- [ ] Confirm no backend, AI agent, integration, or new screen was implemented.

### V-04 — Review artifact

- [ ] Open a draft specification PR.
- [ ] Include scope, evidence, validation, risks, and exact human approval gate.
- [ ] Keep PR in draft or review state until human approval.

## Future Implementation Backlog — Not Authorized

The following tasks are placeholders for one or more later approved specifications. They must remain unchecked.

### I-01 — Rebuild the primary application shell

- [ ] Make Learning Intelligence the default root experience.
- [ ] Implement approved primary and role-aware navigation.
- [ ] Preserve accessibility and responsive behavior.

### I-02 — Implement the synthetic pilot journey

- [ ] Create the approved learner-to-intervention-to-outcome flow.
- [ ] Use synthetic typed data only.
- [ ] Expose evidence, uncertainty, human decisions, and audit evidence.

### I-03 — Isolate Executive Experience

- [ ] Move or map the executive journey to a private route or entitlement.
- [ ] Remove it from default navigation.
- [ ] Preserve regression tests and strategic narrative.

### I-04 — Add implementation verification

- [ ] Add automated tests for navigation, role states, evidence distinctions, decisions, experiments, outcomes, knowledge, governance, and executive gating.
- [ ] Run typecheck, tests, build, runtime, responsive, keyboard, reduced-motion, localization, and narrative reviews.
- [ ] Produce a reviewer artifact before merge.

## Human Review Tasks

- [ ] Review product vision and users.
- [ ] Review information architecture and seven-item navigation.
- [ ] Review MVP journey and non-goals.
- [ ] Review domain, data, AI, backend, and platform boundaries.
- [ ] Review governance and evidence requirements.
- [ ] Review metrics, team, timeline, labor sizing, and pilot approach.
- [ ] Review Executive Experience isolation.
- [ ] Approve, request changes, or reject the specification.
- [ ] Only after approval, change status from `spec_ready` to `approved` and create bounded implementation specifications.

## Definition of Spec Ready

- Requirements, design, tasks, acceptance criteria, risks, and stop conditions exist.
- All requested rebaseline topics are covered.
- Feature and progress records are synchronized.
- Only documentation and lifecycle files changed.
- Verification evidence is recorded.
- A draft PR is available for human review.
- No application implementation has started.

## Stop Conditions

- Stop before marking P-000 `approved`.
- Stop before implementing any item under the Future Implementation Backlog.
- Stop before merging without human review.
- Stop if the branch contains unrelated or application changes.

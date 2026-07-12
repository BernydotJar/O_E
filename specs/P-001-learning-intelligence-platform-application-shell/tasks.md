# Tasks — P-001 Learning Intelligence Platform Application Shell and Role-Aware Navigation

## Gate

No application code may change until this specification is explicitly approved.

## Specification Tasks

### S-01 — Product and navigation contract
- [x] Make LIP Home the default product route.
- [x] Define seven primary navigation items and order.
- [x] Define contextual and administrative navigation.

### S-02 — Roles and access
- [x] Define synthetic roles and capability matrix.
- [x] Define hidden, disabled, unauthorized, and unavailable behavior.
- [x] State that frontend role simulation is not security enforcement.

### S-03 — Routes and navigation behavior
- [x] Define canonical paths and detail routes.
- [x] Define breadcrumbs, deep links, browser history, redirects, and recovery.
- [x] Define not-found behavior.

### S-04 — Module preservation
- [x] Map Student Digital Twin to learner detail.
- [x] Map Teacher Intelligence to teacher detail.
- [x] Reuse Organizational Cortex on Home.
- [x] Preserve safeguards, tests, and synthetic disclosures.

### S-05 — Executive isolation
- [x] Define private strategic route.
- [x] Require explicit entitlement, role, or feature flag.
- [x] Remove standard navigation and search discovery.
- [x] Preserve executive narrative and regression coverage.

### S-06 — Experience states
- [x] Define loading, empty, error, unauthorized, unavailable, and not-found states.
- [x] Prohibit restricted metadata leakage.

### S-07 — Quality requirements
- [x] Define responsive desktop, tablet, and mobile behavior.
- [x] Define keyboard, focus, screen-reader, and reduced-motion behavior.
- [x] Define English/Spanish message and layout requirements.

### S-08 — Delivery boundaries
- [x] Define future files that may be created or modified.
- [x] Prohibit package, backend, auth, infrastructure, and unrelated changes.
- [x] Define migration, rollout, rollback, tests, risks, and stop conditions.

## Future Implementation Backlog — Not Authorized

### I-01 — Shell primitives
- [ ] Create typed route, access, and i18n primitives.
- [ ] Add the local shell rollout switch.

### I-02 — Application shell
- [ ] Build AppShell, primary navigation, header, breadcrumbs, and route states.
- [ ] Make Home the default route only after verification.

### I-03 — Module adapters
- [ ] Adapt Student Twin, Teacher Intelligence, and Cortex without domain redesign.

### I-04 — Executive isolation
- [ ] Extract the current executive experience.
- [ ] Add private route and access denial.
- [ ] Remove ordinary discovery paths.

### I-05 — Route surfaces
- [ ] Add role-appropriate indexes, detail paths, and honest unavailable placeholders.

### I-06 — Verification
- [ ] Run typecheck, tests, build, and runtime.
- [ ] Verify deep links, history, roles, states, and module regressions.
- [ ] Verify desktop, tablet, mobile, keyboard, screen reader, reduced motion, and English/Spanish layouts.
- [ ] Verify rollout and rollback.
- [ ] Produce reviewer evidence.

## Lifecycle Tasks

- [ ] Human reviews P-001 requirements, design, and tasks.
- [ ] Human approves, requests changes, or rejects.
- [ ] After approval, update P-001 from `spec_ready` to `approved`.
- [ ] Create a separate implementation branch.
- [ ] Do not mark `in_progress` from the specification branch.

## Definition of Spec Ready

- Requirements, design, tasks, acceptance criteria, risks, and stop conditions exist.
- P-000 approval is recorded.
- P-001 is registered as `spec_ready`.
- Only specification, lifecycle, and documentation files changed.
- A draft PR is available for human review.
- No application implementation started.

## Stop Conditions

- Stop before changing P-001 to `approved`.
- Stop before implementing any `I-*` task.
- Stop before merging without human review.
- Stop if application or unrelated files appear in the branch.
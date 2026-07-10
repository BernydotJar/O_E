# Open English AI-Native Repo Tooling Kit

## Core Rule

Do not implement application code until the active feature has complete specifications and explicit human approval.

## Lifecycle

`pending -> spec_ready -> approved -> in_progress -> review -> done`

Additional stop state: `blocked`.

At most one feature may be active across `approved`, `in_progress`, and `review`.

## Source of Truth

1. `feature_list.json`
2. `specs/<feature-id>/requirements.md`
3. `specs/<feature-id>/design.md`
4. `specs/<feature-id>/tasks.md`
5. `progress/current.md`
6. `progress/history.md`

## Roles

- Leader: selects one feature, maintains scope, delegates, and does not implement directly.
- Spec Author: writes requirements, design, tasks, acceptance criteria, and verification plan; stops before implementation.
- Implementer: changes only approved files, runs verification, and cannot approve or close its own work.
- Reviewer: validates evidence against the specification and does not edit production code.
- Production Reviewer: applies SHIP gates for privacy, security, compliance, reliability, performance, accessibility, observability, and operations.

## Required Operational Contract

Every implementation or review instruction must declare:

- MODE
- FEATURE
- STATE
- SOURCE OF TRUTH
- FILES YOU MAY READ
- FILES YOU MAY TOUCH
- FILES YOU MUST NOT TOUCH
- DO
- DO NOT
- OUTPUT
- STOP

## Product Principles

- Evidence over opinions.
- Every interaction should create a reusable learning signal.
- Humans own judgment; AI owns repetition and recommendation.
- Teachers are augmented, not replaced.
- Personalization must be measurable, explainable, and privacy-aware.
- Executive metrics must connect learning outcomes to retention, margin, and operating leverage.
- Demo data must be synthetic and clearly labeled.

## MVP Constraints

The interview MVP is a simulation, not a production LMS. It must not imply access to real Open English data, internal systems, students, teachers, or financial information.

No package installation, deployment, schema migration, external service integration, or secret handling is allowed without an approved feature specification.

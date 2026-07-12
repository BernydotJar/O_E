# Requirements — P-001 Learning Intelligence Platform Application Shell and Role-Aware Navigation

## Status

`spec_ready`

Ready for human review. No application code may change until explicit approval.

## Mode

`MVP` — frontend-first, synthetic roles and data, no production identity or authorization.

## Parent Decision

P-001 implements approved P-000 decisions:

- Learning Intelligence Platform (LIP) is the primary product and default entry point.
- Primary navigation is Home, Learners, Teachers, Interventions, Outcomes, Knowledge, and Operations.
- Executive Experience is retained privately and removed from normal navigation.
- Student Digital Twin, Teacher Intelligence Platform, and Organizational Cortex remain reusable modules.

## Product Intent

Define an implementable application shell that gives authorized users a coherent, accessible path from learning evidence to human decisions, interventions, outcomes, and organizational knowledge. The shell is an experience and access boundary; it must not duplicate domain logic or imply production authorization.

## Current-State Evidence

The repository currently uses React 19 and Vite, has no third-party router, renders the executive experience from `src/App.tsx`, and mounts `App`, `StudentTwinWorkspace`, and `TeacherIntelligenceWorkspace` as sibling surfaces in `src/main.tsx`. Existing navigation is anchor-based. P-001 must therefore support an incremental migration without deleting existing modules or adding an unapproved dependency.

## Users and Roles

Synthetic MVP roles:

1. **Learner** — sees own learning context and recommendations only.
2. **Teacher** — sees assigned learners, teaching context, interventions, and outcomes.
3. **Academic coach/lead** — sees assigned cohorts, teacher coaching, interventions, outcomes, and knowledge candidates.
4. **Learning scientist/curriculum lead** — sees outcomes, experiment evidence, and knowledge artifacts.
5. **Operations lead** — sees intervention queues, assignments, exceptions, and service status.
6. **Product/Data/AI practitioner** — sees synthetic product evidence, evaluations, and governance metadata.
7. **Governance reviewer** — sees audit evidence, policies, overrides, and review states.
8. **Platform administrator** — sees role simulation, entitlements, configuration, and module availability.
9. **Executive** — may access the private Executive Experience only through an explicit entitlement.

The MVP may simulate role selection locally but must label it as a demo control, not authentication.

## Primary Navigation

The default shell must expose, in this order:

```text
Home
Learners
Teachers
Interventions
Outcomes
Knowledge
Operations
```

Rules:

- Home is the default route.
- Items unavailable to a role are hidden when discovery would be inappropriate, or disabled with an explanation when awareness is useful.
- Navigation state must be represented textually and accessibly, not by color alone.
- Administration, Governance, and Integrations are role-gated utilities, not primary navigation.
- Executive Experience must never appear in standard primary or mobile navigation.

## Route and Page Hierarchy

Canonical route contract for the future implementation:

```text
/                         -> Home
/learners                 -> Learner list or role-appropriate learner home
/learners/:learnerId      -> Learner intelligence detail
/teachers                 -> Teacher list or role-appropriate teacher home
/teachers/:teacherId      -> Teacher intelligence detail
/interventions            -> Intervention queue and experiment list
/interventions/:id        -> Intervention or experiment detail
/outcomes                 -> Outcomes portfolio
/outcomes/:id             -> Outcome review detail
/knowledge                -> Organizational knowledge index
/knowledge/:id            -> Knowledge artifact detail
/operations               -> Operations workspace
/admin                    -> Role-gated administration
/governance               -> Role-gated governance
/integrations             -> Role-gated integrations placeholder
/strategic/executive      -> Private Executive Experience
/unauthorized             -> Access-denied state
/unavailable              -> Disabled or unavailable module state
```

A third-party router is not automatically approved. The implementation specification must choose either a small internal History API router or a separately approved dependency.

## Breadcrumbs, Deep Links, and Return Behavior

- Detail pages show `Domain > Entity` breadcrumbs.
- Breadcrumbs are semantic navigation and keyboard accessible.
- Valid deep links restore the requested page and synthetic role context where safe.
- Invalid identifiers show a recoverable not-found state with a route back to the domain index.
- Back behavior follows browser history; explicit “Back to…” links provide deterministic recovery.
- Switching roles redirects to the nearest authorized parent route and explains the change.

## Role and Permission Matrix

| Area | Learner | Teacher | Coach | Learning/Product | Operations | Governance/Admin | Executive |
|---|---|---|---|---|---|---|---|
| Home | own | assigned | assigned | portfolio | queue | control | portfolio |
| Learners | own only | assigned | assigned cohorts | synthetic analysis | limited case context | audit only | aggregate only |
| Teachers | no | self | assigned | synthetic analysis | no | audit only | aggregate only |
| Interventions | own view | assigned | manage assigned | design/review | operate | audit | aggregate |
| Outcomes | own | assigned | assigned | analyze | operational | audit | aggregate |
| Knowledge | approved guidance | guidance | contribute/review | manage candidates | consume | audit | aggregate |
| Operations | no | limited status | limited | no | full synthetic | audit/admin | aggregate |
| Executive module | no | no | no | no | no | explicit admin only | entitled |

No UI permission simulation may be described as a security boundary. Production authorization requires backend enforcement under a later specification.

## Role-Aware Home

Home must adapt its information hierarchy without creating separate products:

- learner: goals, progress, recommendations, consent/contest controls;
- teacher: assigned learners, upcoming decisions, experiment status;
- coach: review queue, cohort signals, coaching actions;
- learning/product: experiments, evidence quality, outcomes, knowledge candidates;
- operations: queue health, capacity, exceptions;
- governance/admin: pending reviews, incidents, policy and access status;
- executive: standard LIP home plus an explicitly private strategic-module entry when entitled.

## Existing Module Preservation

- Student Digital Twin becomes the learner-detail module under `/learners/:learnerId`.
- Teacher Intelligence Platform becomes the teacher-detail module under `/teachers/:teacherId`.
- Organizational Cortex becomes a reusable Home visualization and learning-loop explainer, not the whole application shell.
- Existing evidence distinctions, human decision controls, safeguards, tests, and synthetic disclosures remain intact.
- Existing modules must receive route/context inputs through bounded adapters rather than duplicating their data.

## Executive Experience Isolation

The existing executive narrative must:

- move behind `/strategic/executive` or an equivalent private route;
- require an explicit synthetic entitlement, role, or feature flag;
- be absent from primary navigation, search suggestions, breadcrumbs, and ordinary mobile menus;
- show unauthorized state when directly accessed without entitlement;
- preserve its narrative, tour, economics, roadmap, and regression tests;
- remain loosely coupled from operational LIP modules;
- never become the default fallback route.

## Required UI States

Every route family must define:

- **loading** — skeleton or status text that preserves layout and announces progress;
- **empty** — explains why no records exist and the next valid action;
- **error** — states what failed, preserves safe context, and offers retry or return;
- **unauthorized** — distinguishes lack of access from missing content;
- **unavailable** — explains disabled feature, environment, or dependency;
- **not found** — handles invalid routes or identifiers without crashing.

No state may expose restricted entity names or metadata.

## Responsive and Interaction Requirements

- Desktop: persistent side or top-level primary navigation.
- Tablet: compact navigation preserving labels and active state.
- Mobile: accessible menu or bottom/compact navigation with all authorized primary items reachable.
- Keyboard: skip link, logical tab order, visible focus, Escape behavior for overlays, and no keyboard traps.
- Reduced motion: no required meaning conveyed by animation; nonessential transitions disabled.
- Screen reader: landmarks, page titles, route announcements, semantic breadcrumbs, and expanded/collapsed states.
- Touch targets and text sizing must meet WCAG 2.2 AA intent.

## Internationalization

The implementation must support English and Spanish copy through centralized message objects or an equivalent local abstraction. It must cover navigation labels, role names, route titles, breadcrumbs, states, permissions, disclosures, and errors. Layouts must tolerate longer Spanish labels. No external i18n dependency is approved by this spec.

## Migration Strategy

1. Extract the current executive `App` into an Executive Experience module without changing its behavior.
2. Introduce the LIP shell and make Home the root experience.
3. Place Organizational Cortex within Home through an adapter.
4. map Student Twin and Teacher Intelligence to learner and teacher routes.
5. add synthetic role and entitlement context.
6. add route/state/error boundaries.
7. preserve old executive anchors inside the private module.
8. remove ordinary navigation paths to the executive module.
9. verify regressions before deleting obsolete mounting code.

Migration must be reversible until verification passes.

## Rollout and Rollback

Rollout:

- keep the shell behind a local demo feature switch during implementation;
- verify both legacy executive and new shell paths;
- make the shell default only after acceptance criteria pass;
- retain the private executive route.

Rollback:

- restore the prior `main.tsx` mount order and default `App` export;
- disable the shell switch;
- preserve all existing module files and synthetic data;
- do not require data migration.

## Non-Goals

P-001 does not authorize production authentication, backend authorization, persistence, APIs, real data, new AI calls, external integrations, analytics ingestion, infrastructure, deployment changes, package additions, or redesign of Student Twin/Teacher Intelligence domain behavior.

## Acceptance Criteria

- **AC-01** LIP Home is specified as the default route and product experience.
- **AC-02** Seven primary navigation items, order, and role-aware behavior are explicit.
- **AC-03** Route hierarchy, detail routes, private routes, and recovery routes are defined.
- **AC-04** Role matrix covers visibility, access, and no-access behavior.
- **AC-05** Breadcrumbs, deep links, browser history, and role-switch recovery are defined.
- **AC-06** Loading, empty, error, unauthorized, unavailable, and not-found states are defined.
- **AC-07** Student Twin, Teacher Intelligence, and Organizational Cortex are preserved through bounded composition.
- **AC-08** Executive Experience is private, non-default, undiscoverable through standard navigation, and regression-protected.
- **AC-09** Responsive desktop, tablet, and mobile navigation requirements are defined.
- **AC-10** Keyboard, screen-reader, focus, reduced-motion, and WCAG 2.2 AA intent are defined.
- **AC-11** English/Spanish internationalization requirements and layout resilience are defined.
- **AC-12** Migration order avoids destructive rewrites and remains reversible.
- **AC-13** Rollout and rollback criteria are explicit.
- **AC-14** Future file boundaries and prohibited changes are explicit in design.
- **AC-15** Automated navigation, permission, state, deep-link, and regression tests are specified.
- **AC-16** Manual responsive, accessibility, localization, and narrative verification is specified.
- **AC-17** Production security or authorization is not implied by frontend role simulation.
- **AC-18** No application implementation occurs before approval.

## Risks

- Frontend-only role simulation may be mistaken for security.
- A shell rewrite may break established executive, learner, or teacher journeys.
- Navigation may become too broad before domain workflows exist.
- Hidden executive content may remain discoverable through links or search.
- A custom router may mishandle history, deep links, or focus.
- Mobile navigation may truncate labels or hide role state.
- English-only assumptions may create Spanish layout defects.

## Stop Conditions

Stop and return to specification if implementation requires real identity/data, backend enforcement, package additions, infrastructure, destructive deletion, redesign of domain modules, changes outside approved files, or claims of production security, compliance, or readiness.
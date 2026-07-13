# P-001A — Cinematic Role-Aware Experience Upgrade

## Status

`approved` by the explicit conditional approval in the execution command. This addendum is implemented on the existing P-001 branch and must return to `review`; it does not authorize merge.

## Design Thesis

Learning Intelligence Platform must feel like an intelligent learning environment, not a technical navigation shell. Within ten seconds, each role should understand who they are, their mission, what requires attention, the decisions they own, and how evidence becomes learning outcomes.

## Visual Principles

- Institutional deep blue and navy remain the structural foundation.
- Cyan and aqua represent learning and evidence; coral represents human action; warm yellow represents progress and optimism; green is reserved for validated progress.
- Use dimensional gradients, controlled glass layers, ambient light, original SVG scenes, generous editorial hierarchy, and restrained motion.
- Avoid monochrome wireframes, finance-dashboard patterns, opaque scores, stock imagery, childlike gamification, and decoration without narrative purpose.

## Role Experience Matrix

| Role | Mission | Primary attention | Hero emphasis |
|---|---|---|---|
| Learner | Build confidence and momentum | Next mission and evidence | Personal learning journey |
| Teacher | Improve learning through judgment | Learners and experiments | Classroom intelligence |
| Coach | Help practices transfer responsibly | Cohorts and review queue | Cohort constellation |
| Learning/Product | Improve the learning system | Experiments, outcomes, unknowns | System intelligence |
| Operations | Coordinate human support | Capacity, queues, exceptions | Operational flow |
| Governance/Admin | Make intelligence reviewable | Provenance, policies, incidents | Evidence control network |
| Executive | Decide where to invest and scale | Outcomes, economics, risks | Strategic portfolio |

Changing role must alter the hero, original visual, accent theme, priority, metrics, actions, memory preview, and narrative while retaining one shared product architecture.

## Component Architecture

- `LearningIntelligenceApp` retains routing, role simulation, navigation, localization, entitlement, breadcrumbs, and route-state ownership.
- `RoleHome` composes role-specific data from `homeData.ts`.
- `RoleVisual` renders an original inline SVG scene with no external runtime dependency.
- Honest domain previews explain purpose, expected evidence, human decisions, future artifact, and lifecycle gate without simulating unavailable functionality.
- Existing Student Digital Twin, Teacher Intelligence, and Executive Experience remain bounded child modules.

## Evidence Timeline

Preserve timestamp, source, category, observed/reported/derived distinction, event, and signal interpretation. Improve scanability and responsive stacking without reducing evidence to a score or opaque visualization.

## Intervention Studio

Use a flexible responsive grid with no horizontal overflow. Preserve owner, mechanism, effort, urgency, limitation, validation target, human decision state, and the disclosure “AI recommends. Humans decide.”

## Asset Strategy

- Original inline SVG role scenes only.
- No third-party images, fonts, services, or runtime calls.
- Visuals contain no critical text and expose accessible labels.
- CSS provides fallback surfaces and reduced-motion behavior.

## Responsive and Motion Strategy

- Desktop: compact persistent navigation; product content dominates.
- Tablet: collapsible navigation and resilient two-column compositions.
- Mobile: off-canvas navigation, stacked hero, single-column cards, legible timeline, no horizontal overflow.
- Restrained entrance, ambient, role-transition, hover, and focus depth.
- No critical information depends on animation; `prefers-reduced-motion` disables nonessential motion.

## Accessibility

Preserve skip link, landmarks, visible focus, keyboard-operable menus, route announcements, semantic headings, meaningful SVG labels, and sufficient contrast.

## Acceptance Criteria

- **A-01** Each of seven roles has a distinct hero, mission, visual, priority, metrics, actions, and memory preview.
- **A-02** Role differentiation is understandable within ten seconds.
- **A-03** Institutional blue remains primary while joyful accents and depth prevent a flat monochrome result.
- **A-04** Original role visuals are local and require no third-party runtime dependency.
- **A-05** Large accidental empty areas are removed from Home and unavailable-domain routes.
- **A-06** Pending domains remain honest previews, not simulated functionality.
- **A-07** Evidence Timeline preserves provenance, time, type, content, and signal interpretation.
- **A-08** Intervention Studio has no horizontal overflow or clipped cards.
- **A-09** Executive Experience remains private and absent from standard navigation.
- **A-10** English and Spanish shell and role-specific content remain centralized.
- **A-11** Desktop, tablet, and mobile compositions remain intentional.
- **A-12** Keyboard, focus, route announcements, and reduced motion remain supported.
- **A-13** No new dependencies, backend, real data, runtime models, infrastructure, or deployment changes are introduced.
- **A-14** Typecheck, automated tests, and production build pass before returning to review.

## File Boundaries

May create or modify `src/app/**`, `src/i18n/**`, `src/application-shell.css`, this addendum, lifecycle records, reviewer evidence, and PR description. Must not modify package manifests, lockfiles, build configuration, backend, APIs, persistence, authentication, deployment, infrastructure, secrets, or internal domain logic.

## Verification Plan

Run `npm run typecheck`, `npm test`, and `npm run build`; then inspect role differentiation, honest previews, executive isolation, timeline information, intervention responsiveness, localization, keyboard/focus, reduced motion, and representative viewport widths.

## Rollback

Revert the P-001A commits while retaining the approved P-001 routing and shell implementation. No data migration or destructive deletion is involved.

## Risks

Visual richness may obscure evidence hierarchy; inline SVG may become decorative noise; existing domain CSS may conflict with shell styles; frontend role simulation may be mistaken for security; and exact existing-module regressions still require execution on the real branch checkout.

## Stop Conditions

Stop before adding dependencies, licensed third-party assets, backend or real-data behavior, changing production authorization, redesigning domain logic, changing architecture outside P-001, making production/compliance/causal claims, or merging PR #11.

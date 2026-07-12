# Design — P-001 Learning Intelligence Platform Application Shell and Role-Aware Navigation

## Design Thesis

Replace the executive-first page composition with a stable Learning Intelligence application shell while preserving existing learner, teacher, cortex, and executive modules as bounded children.

## Current Architecture

- `src/App.tsx` is the executive experience.
- `src/main.tsx` mounts App, Student Twin, Teacher Intelligence, and a navigation bridge as siblings.
- Navigation is anchor-based.
- No router package is installed.

## Target Composition

```text
main.tsx
  -> LearningIntelligenceApp
      -> DemoAccessProvider
      -> AppShell
          -> PrimaryNavigation
          -> ContextHeader
          -> RouteOutlet
              -> HomePage
              -> LearnersIndex / LearnerDetailAdapter
              -> TeachersIndex / TeacherDetailAdapter
              -> Interventions
              -> Outcomes
              -> Knowledge
              -> Operations
              -> Admin / Governance / Integrations
              -> ExecutiveExperienceAdapter
          -> RouteStateBoundary
```

The shell owns navigation, layout, demo access state, route resolution, page titles, breadcrumbs, and common UI states. Domain modules own their existing evidence, decision, experiment, and safeguard behavior.

## Routing Decision Boundary

P-001 does not approve a new dependency. Preferred MVP design is a small typed History API router supporting:

- route matching;
- `pushState` and `popstate`;
- route parameters;
- redirects;
- not-found and unauthorized outcomes;
- focus and title updates after navigation.

A third-party router requires a separate approval because it changes dependencies and lockfiles.

## Route Types

```ts
type RouteId =
  | 'home' | 'learners' | 'learner-detail'
  | 'teachers' | 'teacher-detail'
  | 'interventions' | 'intervention-detail'
  | 'outcomes' | 'outcome-detail'
  | 'knowledge' | 'knowledge-detail'
  | 'operations' | 'admin' | 'governance' | 'integrations'
  | 'executive' | 'unauthorized' | 'unavailable' | 'not-found'

type RouteMatch = { id: RouteId; params: Record<string, string> }
```

Route definitions must include title keys, breadcrumb builders, required capability, and availability state.

## Demo Access Model

```ts
type DemoRole =
  | 'learner' | 'teacher' | 'coach' | 'learning_product'
  | 'operations' | 'governance_admin' | 'executive'

type Capability =
  | 'view_own_learning' | 'view_assigned_learners'
  | 'view_teachers' | 'manage_interventions'
  | 'analyze_outcomes' | 'view_knowledge'
  | 'operate_queues' | 'administer_platform'
  | 'review_governance' | 'view_executive'
```

A local capability map drives presentation only. Components and disclosures must state that this is synthetic access simulation, not authentication or security enforcement.

## Navigation Model

Primary navigation is generated from one ordered configuration object. Each item includes route, label key, icon-independent text label, capability policy, and mobile behavior. Hidden versus disabled behavior must be explicit. Executive Experience is excluded from this configuration.

Context utilities may include search placeholder, notifications placeholder, evidence drawer, help, language, and demo role switch. Admin utilities appear separately and only for authorized demo roles.

## Home Design

Home is one product surface with role-specific sections, not separate applications. It includes:

- role context and synthetic disclosure;
- assigned work or personal progress;
- evidence-to-outcome loop summary;
- relevant decisions and exceptions;
- Organizational Cortex as a reusable explanatory module;
- links only to routes authorized for the active role.

## Module Adapters

### Learner

`LearnerDetailAdapter` supplies selected synthetic learner and route context to the existing Student Twin workspace. Existing internal evidence distinctions and safeguards remain unchanged.

### Teacher

`TeacherDetailAdapter` supplies selected synthetic teacher and route context to Teacher Intelligence. Existing coaching, experiment, and responsible-use behavior remains unchanged.

### Cortex

Organizational Cortex is extracted or wrapped as a Home module. It must not own global navigation.

### Executive

The existing `App.tsx` content is extracted to `ExecutiveExperience`. An adapter verifies demo entitlement before rendering it. Its anchor navigation and tour remain internal to the module.

## State Boundaries

A route state boundary converts route and module states into:

- loading;
- empty;
- error;
- unauthorized;
- unavailable;
- not found.

Unauthorized and unavailable are distinct. Error boundaries must preserve a route back to Home or the domain index. Restricted entity metadata must not leak in denial messages.

## Accessibility Lifecycle

On route changes:

1. update document title;
2. update breadcrumb state;
3. move focus to the page heading or main content using a managed focus target;
4. announce the page change through a polite live region;
5. preserve browser back behavior.

Navigation must support skip links, visible focus, semantic landmarks, keyboard-operable menus, Escape closing, and reduced motion.

## Internationalization Design

Use a local message catalog such as:

```text
src/i18n/messages.en.ts
src/i18n/messages.es.ts
src/i18n/I18nProvider.tsx
```

All shell copy uses message keys. Domain content may migrate incrementally, but new shell text may not be hard-coded in components. Language preference is local demo state only.

## Responsive Design

- >= 1024px: persistent sidebar or equivalent full navigation.
- 768–1023px: compact rail/header with visible labels on expansion.
- < 768px: menu or compact mobile pattern with all authorized routes reachable.
- No breakpoint may rely on hover.
- Active role, current page, and synthetic status remain visible.

## Proposed Future Files

### May create

```text
src/app/LearningIntelligenceApp.tsx
src/app/AppShell.tsx
src/app/PrimaryNavigation.tsx
src/app/ContextHeader.tsx
src/app/Breadcrumbs.tsx
src/app/RouteStateBoundary.tsx
src/app/routes.ts
src/app/router.ts
src/app/access.ts
src/app/DemoAccessProvider.tsx
src/app/pages/*
src/app/adapters/*
src/i18n/*
src/application-shell.css
src/app/**/*.test.tsx
```

### May modify

```text
src/main.tsx
src/App.tsx
src/App.test.tsx
src/styles.css
src/components/ExecutiveTour.tsx
src/components/student-twin/* only for adapter inputs
src/components/teacher-intelligence/* only for adapter inputs
progress/*
feature_list.json
```

### Must not modify without new approval

```text
package.json
package-lock.json or other lockfiles
vite/TypeScript configuration
backend, API, persistence, auth, deployment, secrets
existing synthetic datasets except adapter identifiers
unrelated specs or completed reviewer artifacts
```

## Migration Sequence

1. Add route/access/i18n primitives behind a disabled local shell switch.
2. Extract executive content without visual redesign.
3. Add AppShell and Home.
4. Adapt Student Twin and Teacher Intelligence.
5. Place Cortex on Home.
6. Add remaining route placeholders and required state screens.
7. add private executive route and remove standard discovery.
8. switch root to LIP after tests and manual review pass.
9. remove obsolete sibling mounts only after regression evidence.

Each step should remain independently testable. Do not combine domain redesign with shell migration.

## Test Strategy

Automated tests must cover:

- root resolves to Home;
- all seven primary items and order;
- active navigation and route title;
- role capability matrix and safe redirects;
- executive route entitlement and absence from standard navigation;
- deep links, invalid IDs, back/forward history;
- breadcrumbs;
- loading, empty, error, unauthorized, unavailable, not found;
- language switching and required message coverage;
- keyboard navigation and route focus;
- Student Twin, Teacher Intelligence, Cortex, and Executive regressions;
- no restricted labels in denial states.

Manual verification must cover desktop, tablet, mobile, keyboard-only, screen reader landmarks/announcements, reduced motion, English/Spanish layout, direct URL entry, refresh, history, role switching, and rollback.

## Rollout Gate

The shell may become default only when automated tests, build, runtime, responsive review, accessibility review, localization review, module regressions, and executive isolation pass. Otherwise retain the legacy default through the local switch.

## Risks and Mitigations

- Custom router defects: keep matcher small, typed, and heavily tested.
- Module regression: use adapters and preserve existing tests.
- false security: persistent synthetic-access disclosure.
- executive leakage: exclude from navigation config and test direct denial.
- broad placeholder product: label unavailable routes honestly.
- localization drift: catalog completeness test.

## Verification Plan

Future implementation verification:

```text
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

Plus route, responsive, accessibility, localization, narrative, and rollback evidence.

## Stop Conditions

Stop if implementation requires a new dependency, real identity or data, backend authorization, destructive deletion, domain redesign, or changes outside the approved file boundaries.
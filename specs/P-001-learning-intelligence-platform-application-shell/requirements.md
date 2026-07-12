# Requirements — P-001 Learning Intelligence Platform Application Shell and Role-Aware Navigation

## Status

`spec_ready`

This specification is ready for human review. No application code may change until this specification is explicitly approved.

## Mode

`MVP` — frontend-first, synthetic roles and data, no production identity or authorization.

## Parent Decision

P-001 implements the approved product direction from `P-000-learning-intelligence-platform-rebaseline`:

- Learning Intelligence Platform is the primary product;
- the default product navigation is Home, Learners, Teachers, Interventions, Outcomes, Knowledge, and Operations;
- Executive Experience is retained as a private strategic module and must not remain the default experience;
- Student Digital Twin, Teacher Intelligence Platform, and Organizational Cortex are preserved as reusable product modules.

## Product Intent

Create an application-shell specification that makes the Learning Intelligence Platform the default entry point and gives each authorized role a coherent, accessible, traceable path through learning evidence, human decisions, interventions, outcomes, and organizational knowledge.

The shell is an experience and access boundary. It must not become a second source of business logic, duplicate domain data, or imply production authorization.

## Current-State Evidence

The current repository has:

- a React 19 and Vite single-page application;
- no third-party routing dependency;
- `src/App.tsx` rendering the executive transformation experience as the main page;
- `src/main.tsx` mounting `App`, `StudentTwinWorkspace`, and `TeacherIntelligenceWorkspace` as sibling surfaces;
- anchor-based executive
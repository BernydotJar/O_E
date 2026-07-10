# Requirements — 000 Organizational Cortex MVP

## Status

`spec_ready`

## Mode

`MVP`

## Owner

CTO Office simulation

## Business Goal

Demonstrate, in a credible executive experience, how Open English could evolve from disconnected platforms and operational data into an AI-native learning organization that converts every meaningful interaction into reusable intelligence and measurable business improvement.

## Problem Statement

The transformation thesis is currently conceptual. A CEO, CFO, Board member, or engineering leader needs to see a bounded system that connects learning signals to decisions, outcomes, economics, and an executable delivery model.

## Primary Audience

- CEO and executive leadership
- CFO and Board
- CTO and senior engineering candidates
- Product, learning, teacher operations, and AI platform leaders

## MVP Outcome

A polished, responsive, synthetic-data experience that explains and simulates one closed organizational learning loop across three domains:

1. Student retention
2. Teacher augmentation
3. Agentic engineering delivery

## Core Loop

```text
Interaction
-> Signal Capture
-> AI Evaluation
-> Organizational Memory
-> Recommendation or Intervention
-> Measured Outcome
-> New Learning
```

## Required User Journeys

### Journey A — Executive Overview

An executive can understand within 60 seconds:

- why Open English must become AI-native;
- what the Organizational Cortex is;
- which business and learning outcomes it targets;
- how the first 90 days reduce risk and produce evidence.

### Journey B — Student Retention Signal

The user can inspect a synthetic student and see:

- learning goal and current proficiency;
- engagement and motivation signals;
- recurring errors or friction;
- predicted early-churn risk;
- evidence behind the risk;
- recommended intervention;
- expected measurable outcome.

### Journey C — Teacher Intelligence

The user can inspect a synthetic teacher cohort and see:

- outcome-linked teaching scores;
- behavioral patterns from top performers;
- recommendations for a selected teacher;
- suggestion acceptance and impact;
- how the system distinguishes correlation from validated improvement.

### Journey D — Agentic Build Engine

The user can inspect how this MVP itself is governed through:

- specification status;
- human approval gate;
- bounded implementation tasks;
- automated verification;
- review evidence;
- MVP versus SHIP readiness.

## Functional Requirements

- FR-01: Present an executive landing narrative with a clear current-state and future-state contrast.
- FR-02: Visualize the Organizational Cortex loop and its participating domains.
- FR-03: Provide a Student Digital Twin simulation using explicitly synthetic data.
- FR-04: Provide a Teacher Intelligence simulation using explicitly synthetic data.
- FR-05: Provide an Agentic Build Engine status and evidence view.
- FR-06: Show a 30/60/90-day transformation sequence.
- FR-07: Connect product metrics to business outcomes, including retention, learning velocity, cost per lesson, and operating leverage.
- FR-08: Support desktop and mobile layouts.
- FR-09: Clearly separate observed signals, model inference, recommendation, and validated outcome.
- FR-10: Avoid claims that depend on confidential or real Open English data.

## Non-Functional Requirements

- NFR-01: The experience must feel credible for CEO, CFO, and Board review rather than like a generic AI dashboard.
- NFR-02: Primary content must be accessible by keyboard and use semantic HTML.
- NFR-03: Initial load and interactions must remain responsive on a typical interview laptop.
- NFR-04: No production credentials, personal data, external databases, or proprietary Open English assets may be required.
- NFR-05: All metrics and profiles must carry synthetic-data labeling where relevant.
- NFR-06: Architecture must permit later replacement of mock data with governed APIs without rewriting the experience.

## Out of Scope

- Production LMS functionality
- Real student or teacher data
- Authentication and enterprise identity
- Salesforce, NetSuite, Zuora, or Yuno integration
- Production ML training or churn prediction
- Automated instructional decisions affecting real learners
- Deployment to Open English infrastructure
- Claims about Open English's current internal architecture beyond the recruitment brief

## Success Metrics for the Interview MVP

- The transformation thesis can be explained in under 5 minutes.
- Each required journey is navigable without developer intervention.
- Every AI recommendation displays supporting evidence or an explicit uncertainty state.
- No unlabeled real-world-looking personal data appears.
- The repository demonstrates the full spec-driven lifecycle through review.
- Automated verification passes for the approved implementation.

## Acceptance Criteria

- AC-01: A user can move from executive overview to each of the three domain simulations.
- AC-02: The Organizational Cortex visualization shows the complete closed loop.
- AC-03: The student view shows evidence, inference, intervention, and target outcome as separate concepts.
- AC-04: The teacher view shows behavioral patterns rather than only aggregate ratings.
- AC-05: The engineering view shows current feature state and required gates.
- AC-06: The 90-day roadmap distinguishes foundations, pilots, and scaling decisions.
- AC-07: Synthetic data is visibly identified.
- AC-08: Responsive and keyboard-navigation checks pass.
- AC-09: Tests verify the primary narrative and domain interactions.
- AC-10: A reviewer can trace every implemented element to this specification.

## Approval Gate

Implementation must not begin until a human changes the feature status from `spec_ready` to `approved`.

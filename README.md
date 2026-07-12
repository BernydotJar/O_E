# Open English AI-Native Transformation

A spec-driven product and transformation program for designing Open English as a unified AI-native learning company.

This repository is intentionally built as evidence, not presentationware. Product architecture, prototypes, metrics, governance, and roadmap must emerge from approved specifications and reviewable implementation increments.

## North Star

Open English becomes a learning organization whose product, knowledge, decisions, software, and operations improve continuously from every student, teacher, employee, and system interaction.

## Primary Product Direction

The primary product is the **Learning Intelligence Platform**: a governed operating layer that turns learning interactions into evidence, supports accountable human decisions, runs bounded interventions, measures outcomes, and preserves validated organizational learning.

The existing Executive Experience is retained as a private, role-gated strategic module. It must not remain the anonymous or default authenticated landing experience.

The current gate is:

```text
P-000-learning-intelligence-platform-rebaseline: spec_ready
```

Human approval is required before any new product screen, backend service, agent, integration, dependency, infrastructure, or real-data workflow begins.

## Learning Intelligence Loop

```text
Interaction -> Signal -> Evidence -> Interpretation -> Human decision
-> Bounded intervention -> Outcome measurement -> Organizational memory
```

## Delivery Model

```text
idea -> pending -> spec_ready -> approved -> in_progress -> review -> done
```

Additional stop state: `blocked`.

No application code should be implemented before its requirements, design, tasks, file boundaries, acceptance criteria, verification plan, and human approval are present.

## Execution Modes

- `MVP`: validated, bounded product increment with specifications, tests, evidence, and review.
- `SHIP`: production-grade increment with privacy, security, data correctness, reliability, performance, accessibility, observability, operations, support, and cost gates.

## Repository Shape

```text
AGENTS.md
RTK.md
feature_list.json
specs/
docs/
adr/
progress/
apps/
packages/
```

## Current State

- Features `000` through `003` are `done`.
- `P-000-learning-intelligence-platform-rebaseline` is `spec_ready` and awaiting human approval.
- `004-agentic-build-engine` and `005-executive-blueprint` remain pending behind the rebaseline.
- No implementation of the rebaseline has started.

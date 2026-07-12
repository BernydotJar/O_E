export type EvidenceKind =
  | 'observed_lesson_event'
  | 'learner_outcome'
  | 'teacher_reported'
  | 'coach_reported'
  | 'derived_pattern'
  | 'inference'
  | 'unknown'

export type CoachingDecision = 'undecided' | 'accepted' | 'adapted' | 'deferred' | 'rejected'

export type LessonEvidence = {
  id: string
  kind: EvidenceKind
  label: string
  context: string
  behavior: string
  outcome: string
  confidence: string
  limitation: string
}

export type BehaviorPattern = {
  id: string
  behavior: string
  associatedOutcome: string
  mechanism: string
  counterEvidence: string
  transferBoundary: string
  confidence: string
  unknown: string
}

export type ExperimentPlan = {
  hypothesis: string
  context: string
  behaviorChange: string
  duration: string
  leadingIndicator: string
  learnerOutcome: string
  teacherExperience: string
  guardrail: string
  owner: string
  stopCondition: string
}

export type CoachingOption = {
  id: string
  title: string
  behavior: string
  rationale: string
  mechanism: string
  targetSegment: string
  teacherEffort: string
  organizationalSupport: string
  duration: string
  limitation: string
  validationTarget: string
  owner: string
  experiment: ExperimentPlan
}

export type OutcomeMeasure = {
  category: string
  indicator:
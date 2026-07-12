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
  indicator: string
  direction: string
}

export type SharedPractice = {
  title: string
  evidenceSummary: string
  context: string
  limitations: string
  confidence: string
  owner: string
  reviewDate: string
}

export type TeacherScenario = {
  id: string
  name: string
  context: string
  segment: string
  strengths: string[]
  outcomeSignals: string[]
  confidence: string
  behaviorUnderConsideration: string
  importantUnknown: string
  evidence: LessonEvidence[]
  patterns: BehaviorPattern[]
  coachingOptions: CoachingOption[]
  measurement: OutcomeMeasure[]
  sharedPractice: SharedPractice
  safeguards: string[]
}

const commonMeasurement: OutcomeMeasure[] = [
  { category: 'Learner behavior', indicator: 'Participation and voluntary response rate', direction: 'Directional only' },
  { category: 'Learning quality', indicator: 'Accuracy, transfer, and comprehension evidence', direction: 'Compare by segment' },
  { category: 'Learner experience', indicator: 'Confidence and perceived psychological safety', direction: 'No single score' },
  { category: 'Teacher experience', indicator: 'Effort, autonomy, and perceived usefulness', direction: 'Teacher-reported' },
  { category: 'Feasibility', indicator: 'Preparation burden and support required', direction: 'Operational review' },
  { category: 'Segment consistency', indicator: 'Variation across proficiency and lesson format', direction: 'Equity guardrail' },
]

export const teacherIntelligenceScenarios: TeacherScenario[] = [
  {
    id: 'elena-ruiz',
    name: 'Elena Ruiz',
    context: 'Conversation specialist',
    segment: 'B1–B2 adult professionals',
    strengths: ['High learner talk time', 'Open-question density', 'Delayed correction with strong rapport'],
    outcomeSignals: ['Confidence +14 points', 'Completion +9%', 'Participation sustained across four cohorts'],
    confidence: 'Medium-high · synthetic evidence across 24 lessons',
    behaviorUnderConsideration: 'Delay correction and increase open-question density',
    importantUnknown: 'Whether the observed outcome transfers to A1/A2 learners without increasing confusion.',
    evidence: [
      { id: 'e1', kind: 'observed_lesson_event', label: 'Observed lesson event', context: 'B2 role-play cohort', behavior: 'Average correction delay: 7 seconds', outcome: 'Learner talk time reached 68%', confidence: 'High', limitation: 'One lesson format' },
      { id: 'e2', kind: 'learner_outcome', label: 'Learner outcome', context: 'Four B1/B2 cohorts', behavior: 'Open-question sequence used consistently', outcome: 'Confidence pulse increased 14 points', confidence: 'Medium-high', limitation: 'Self-reported experience' },
      { id: 'e3', kind: 'teacher_reported', label: 'Teacher-reported', context: 'Post-lesson reflection', behavior: 'Elena intentionally waits before correcting', outcome: 'Learners attempt self-repair more often', confidence: 'Medium', limitation: 'Teacher interpretation' },
      { id: 'e4', kind: 'coach_reported', label: 'Coach-reported', context: 'Peer observation', behavior: 'Questions build from personal context', outcome: 'Participation remains distributed', confidence: 'Medium', limitation: 'Single observer' },
      { id: 'e5', kind: 'derived_pattern', label: 'Derived pattern', context: 'Synthetic aggregate', behavior: 'Higher open-question density', outcome: 'Associated with completion and confidence', confidence: 'Medium', limitation: 'Association is not causation' },
      { id: 'e6', kind: 'unknown', label: 'Unknown', context: 'Beginner cohorts', behavior: 'Correction delay not yet tested', outcome: 'Comprehension effect unknown', confidence: 'Unknown', limitation: 'No beginner evidence' },
    ],
    patterns: [
      { id: 'p1', behavior: 'Delayed correction after learner completion', associatedOutcome: 'Higher voluntary speaking and confidence', mechanism: 'Protects conversational flow and allows self-repair', counterEvidence: 'Two beginner learners requested faster clarification', transferBoundary: 'May require shorter delay and visual scaffolds for A1/A2', confidence: 'Medium', unknown: 'Optimal delay by proficiency and task type' },
      { id: 'p2', behavior: 'Open questions anchored in learner context', associatedOutcome: 'More distributed participation', mechanism: 'Reduces answer predictability and increases relevance', counterEvidence: 'Time pressure reduced grammar coverage in one cohort', transferBoundary: 'Works best when lesson objectives allow flexible discussion', confidence: 'Medium-high', unknown: 'Effect under exam-focused formats' },
    ],
    coachingOptions: [
      {
        id: 'elena-preserve', title: 'Preserve the conversation pattern', behavior: 'Open-question sequencing with delayed correction', rationale: 'Evidence is consistent in B1/B2 conversation cohorts.', mechanism: 'Maintain flow while increasing learner agency.', targetSegment: 'B1–B2 conversation cohorts', teacherEffort: 'Low', organizationalSupport: 'Light observation rubric', duration: '3 weeks', limitation: 'Does not establish causal impact', validationTarget: 'Stable confidence with no accuracy decline', owner: 'Elena + academic coach',
        experiment: { hypothesis: 'Preserving Elena’s current sequence will sustain participation without reducing accuracy.', context: 'Two B1/B2 conversation cohorts', behaviorChange: 'No change; document the repeatable sequence', duration: '3 weeks', leadingIndicator: 'Voluntary response rate', learnerOutcome: 'Confidence and completion', teacherExperience: 'Preparation burden', guardrail: 'Accuracy must not decline', owner: 'Academic coach', stopCondition: 'Stop if accuracy drops by more than the agreed synthetic threshold' },
      },
      {
        id: 'elena-adapt', title: 'Adapt for beginner learners', behavior: 'Shorten correction delay and add visual comprehension checks', rationale: 'Transferability to A1/A2 is unresolved.', mechanism: 'Preserve agency while reducing ambiguity.', targetSegment: 'A1–A2 adults', teacherEffort: 'Medium', organizationalSupport: 'Beginner lesson templates and coach review', duration: '4 weeks', limitation: 'Small synthetic cohort', validationTarget: 'Participation improves without comprehension loss', owner: 'Elena + beginner specialist',
        experiment: { hypothesis: 'A shorter delay plus visual checks can preserve participation for beginners.', context: 'One A2 pilot cohort', behaviorChange: 'Use 3-second delay and one visual check before correction', duration: '4 weeks', leadingIndicator: 'Attempts before teacher correction', learnerOutcome: 'Comprehension and confidence', teacherExperience: 'Cognitive load', guardrail: 'Confusion requests must not increase', owner: 'Beginner specialist', stopCondition: 'Stop after two sessions if confusion materially rises' },
      },
      {
        id: 'elena-peer', title: 'Request peer replication', behavior: 'Open-question sequencing', rationale: 'A second teacher can test whether the pattern transfers beyond Elena’s experience.', mechanism: 'Separate teacher-specific effect from reusable practice.', targetSegment: 'Comparable B1 cohort', teacherEffort: 'Low', organizationalSupport: 'Peer observation and shared brief', duration: '2 weeks', limitation: 'Replication remains directional', validationTarget: 'Comparable participation pattern', owner: 'Peer teacher + coach',
        experiment: { hypothesis: 'A peer can reproduce the participation pattern using the same sequence.', context: 'Matched B1 conversation cohort', behaviorChange: 'Peer applies three-step open-question sequence', duration: '2 weeks', leadingIndicator: 'Participation distribution', learnerOutcome: 'Confidence', teacherExperience: 'Ease of adoption', guardrail: 'No scripted personality imitation', owner: 'Peer teacher', stopCondition: 'Stop if the sequence feels inauthentic or harms lesson flow' },
      },
    ],
    measurement: commonMeasurement,
    sharedPractice: { title: 'Open questions before delayed correction', evidenceSummary: 'Associated with higher participation and confidence in synthetic B1/B2 conversation cohorts.', context: 'Adult conversation lessons with flexible pacing', limitations: 'Not validated for beginners, exam prep, or every teacher style', confidence: 'Provisional · medium', owner: 'Learning science lead', reviewDate: '2026-09-15' },
    safeguards: ['No teacher leaderboard', 'No employment or compensation decision', 'Teacher may contest, adapt, defer, or reject', 'Purpose-limited evidence and consent expected in production'],
  },
  {
    id: 'marcus-thompson',
    name: 'Marcus Thompson',
    context: 'Beginner structure specialist',
    segment: 'A1–A2 first-time online learners',
    strengths: ['Clear lesson framing', 'Frequent comprehension checks', 'Strong completion consistency'],
    outcomeSignals: ['Completion 91%', 'Comprehension +12%', 'Spontaneous talk time remains low'],
    confidence: 'Medium · synthetic evidence across 20 lessons',
    behaviorUnderConsideration: 'Reduce scaffolding gradually as learners advance',
    importantUnknown: 'When support can be reduced without harming confidence or completion.',
    evidence: [
      { id: 'm1', kind: 'observed_lesson_event', label: 'Observed lesson event', context: 'A1 onboarding lesson', behavior: 'Objective and sequence previewed in first 90 seconds', outcome: 'Fewer clarification interruptions', confidence: 'High', limitation: 'Early-stage learners only' },
      { id: 'm2', kind: 'learner_outcome', label: 'Learner outcome', context: 'A1/A2 cohorts', behavior: 'Frequent comprehension checks', outcome: 'Completion reached 91%', confidence: 'Medium-high', limitation: 'Completion may reflect cohort selection' },
      { id: 'm3', kind: 'teacher_reported', label: 'Teacher-reported', context: 'Reflection log', behavior: 'Marcus maintains structure to reduce anxiety', outcome: 'Learners report predictability', confidence: 'Medium', limitation: 'Intent is not outcome evidence' },
      { id: 'm4', kind: 'derived_pattern', label: 'Derived pattern', context: 'Synthetic cohort comparison', behavior: 'More scaffolding', outcome: 'Higher comprehension but lower spontaneous talk time', confidence: 'Medium', limitation: 'Different lesson topics' },
      { id: 'm5', kind: 'inference', label: 'Inference', context: 'Advancing A2 learners', behavior: 'Scaffolding may persist too long', outcome: 'Possible dependency on prompts', confidence: 'Low-medium', limitation: 'Requires controlled test' },
      { id: 'm6', kind: 'unknown', label: 'Unknown', context: 'A2 transition point', behavior: 'Support reduction timing', outcome: 'Confidence effect unknown', confidence: 'Unknown', limitation: 'No staged withdrawal evidence' },
    ],
    patterns: [
      { id: 'mp1', behavior: 'Explicit framing and frequent checks', associatedOutcome: 'High completion and comprehension', mechanism: 'Reduces uncertainty and supports novice cognitive load', counterEvidence: 'Spontaneous responses remain limited', transferBoundary: 'Support should change as proficiency and confidence increase', confidence: 'Medium-high', unknown: 'Best withdrawal sequence' },
    ],
    coachingOptions: [
      { id: 'marcus-fade', title: 'Test scaffold fading', behavior: 'Remove one prompt layer each week', rationale: 'Maintain clarity while increasing learner autonomy.', mechanism: 'Gradual withdrawal can increase retrieval and spontaneous production.', targetSegment: 'Advancing A2 learners', teacherEffort: 'Medium', organizationalSupport: 'Prompt-fading lesson variants', duration: '4 weeks', limitation: 'May temporarily reduce fluency', validationTarget: 'More spontaneous talk without completion decline', owner: 'Marcus + curriculum coach', experiment: { hypothesis: 'Gradual prompt fading increases spontaneous production without reducing confidence.', context: 'One advancing A2 cohort', behaviorChange: 'Remove one scaffold layer weekly', duration: '4 weeks', leadingIndicator: 'Unprompted responses', learnerOutcome: 'Comprehension and confidence', teacherExperience: 'Ease of timing support', guardrail: 'Completion remains stable', owner: 'Curriculum coach', stopCondition: 'Pause if confidence declines in two consecutive sessions' } },
      { id: 'marcus-choice', title: 'Add learner choice moments', behavior: 'Offer two response pathways after comprehension checks', rationale: 'Choice may increase agency without removing structure.', mechanism: 'Bounded autonomy supports participation.', targetSegment: 'A1–A2 mixed pace', teacherEffort: 'Low', organizationalSupport: 'Choice-card templates', duration: '3 weeks', limitation: 'May not generalize to large groups', validationTarget: 'Participation distribution improves', owner: 'Marcus', experiment: { hypothesis: 'Bounded choice increases voluntary participation.', context: 'Two beginner cohorts', behaviorChange: 'Add two choice moments per lesson', duration: '3 weeks', leadingIndicator: 'Voluntary response rate', learnerOutcome: 'Confidence', teacherExperience: 'Lesson-flow impact', guardrail: 'No increase in confusion', owner: 'Marcus', stopCondition: 'Stop if choice extends lesson time beyond guardrail' } },
      { id: 'marcus-review', title: 'Request transition-point review', behavior: 'Identify when comprehension checks can be reduced', rationale: 'Evidence is insufficient for a universal threshold.', mechanism: 'Human review prevents premature standardization.', targetSegment: 'A2 progression', teacherEffort: 'Low', organizationalSupport: 'Academic-lead observation', duration: '2 lessons', limitation: 'Observation is contextual', validationTarget: 'Document a provisional transition rubric', owner: 'Academic lead', experiment: { hypothesis: 'A coach can identify observable readiness signals for scaffold reduction.', context: 'Two A2 lessons', behaviorChange: 'No immediate change; observe decision points', duration: '2 lessons', leadingIndicator: 'Independent task starts', learnerOutcome: 'Comprehension stability', teacherExperience: 'Decision clarity', guardrail: 'No employment interpretation', owner: 'Academic lead', stopCondition: 'Stop if evidence quality is insufficient' } },
    ],
    measurement: commonMeasurement,
    sharedPractice: { title: 'Structured framing with progressive scaffold fading', evidenceSummary: 'Structure supports beginner completion; fading requires learner-readiness signals.', context: 'A1/A2 onboarding and transition lessons', limitations: 'No universal week or proficiency threshold', confidence: 'Provisional · medium', owner: 'Beginner curriculum lead', reviewDate: '2026-10-01' },
    safeguards: ['No single performance score', 'No assumption that lower talk time means poor teaching', 'Teacher-owned adaptation', 'Segment-level interpretation required'],
  },
  {
    id: 'camila-santos',
    name: 'Camila Santos',
    context: 'Technical accuracy specialist',
    segment: 'B1–C1 mixed professional cohorts',
    strengths: ['Precise explanations', 'High correction quality', 'Strong grammar transfer'],
    outcomeSignals: ['Accuracy +16%', 'Confidence variance remains wide', 'Participation differs by lesson format'],
    confidence: 'Medium · synthetic evidence across 18 lessons',
    behaviorUnderConsideration: 'Change correction timing and interaction rhythm',
    importantUnknown: 'Whether confidence variance comes from technique, learner mix, or lesson format.',
    evidence: [
      { id: 'c1', kind: 'observed_lesson_event', label: 'Observed lesson event', context: 'Grammar clinic', behavior: 'Immediate correction with detailed explanation', outcome: 'High same-session accuracy', confidence: 'High', limitation: 'Clinic format prioritizes precision' },
      { id: 'c2', kind: 'learner_outcome', label: 'Learner outcome', context: 'Mixed B1–C1 cohorts', behavior: 'Correction quality remained consistent', outcome: 'Accuracy improved 16%; confidence varied', confidence: 'Medium', limitation: 'Mixed learner profiles' },
      { id: 'c3', kind: 'teacher_reported', label: 'Teacher-reported', context: 'Reflection', behavior: 'Camila prioritizes preventing fossilized errors', outcome: 'She notices some learners speak less after correction', confidence: 'Medium', limitation: 'Requires learner-level validation' },
      { id: 'c4', kind: 'coach_reported', label: 'Coach-reported', context: 'Conversation lesson', behavior: 'Correction clusters interrupt interaction rhythm', outcome: 'Quieter learners participate less', confidence: 'Medium', limitation: 'One observation' },
      { id: 'c5', kind: 'inference', label: 'Inference', context: 'Conversation formats', behavior: 'Correction timing may affect psychological safety', outcome: 'Confidence transfer may be uneven', confidence: 'Low-medium', limitation: 'Correlation and context confounding' },
      { id: 'c6', kind: 'unknown', label: 'Unknown', context: 'Learner preference', behavior: 'Preferred correction style not captured', outcome: 'Individual response unknown', confidence: 'Unknown', limitation: 'Missing preference evidence' },
    ],
    patterns: [
      { id: 'cp1', behavior: 'Immediate detailed correction', associatedOutcome: 'Strong accuracy with uneven participation confidence', mechanism: 'Rapid error resolution may improve precision but interrupt flow', counterEvidence: 'Advanced learners report valuing direct feedback', transferBoundary: 'Timing may need to vary by proficiency, task, and learner preference', confidence: 'Medium', unknown: 'Which learners benefit from immediate versus delayed correction' },
    ],
    coachingOptions: [
      { id: 'camila-window', title: 'Create correction windows', behavior: 'Batch selected corrections after interaction blocks', rationale: 'Protect flow while retaining technical precision.', mechanism: 'Separate fluency and accuracy phases.', targetSegment: 'B1–B2 conversation lessons', teacherEffort: 'Medium', organizationalSupport: 'Correction-capture template', duration: '3 weeks', limitation: 'Delayed feedback may miss teachable moments', validationTarget: 'Confidence variance narrows without accuracy loss', owner: 'Camila + coach', experiment: { hypothesis: 'Correction windows preserve accuracy while increasing participation confidence.', context: 'Two B1/B2 conversation cohorts', behaviorChange: 'Batch non-critical corrections every 8 minutes', duration: '3 weeks', leadingIndicator: 'Post-correction re-entry rate', learnerOutcome: 'Accuracy and confidence', teacherExperience: 'Memory and workload', guardrail: 'Critical errors still corrected immediately', owner: 'Academic coach', stopCondition: 'Stop if accuracy declines or correction load becomes unmanageable' } },
      { id: 'camila-preference', title: 'Add correction preference check', behavior: 'Ask learners to choose direct or delayed feedback mode', rationale: 'Learner preference is currently unknown.', mechanism: 'Increase perceived control and psychological safety.', targetSegment: 'Mixed professional cohorts', teacherEffort: 'Low', organizationalSupport: 'Preference prompt', duration: '2 weeks', limitation: 'Stated preference may change by task', validationTarget: 'Higher confidence and participation consistency', owner: 'Camila', experiment: { hypothesis: 'Preference-aware correction improves learner experience.', context: 'Three mixed cohorts', behaviorChange: 'Capture preferred correction mode at lesson start', duration: '2 weeks', leadingIndicator: 'Participation after correction', learnerOutcome: 'Confidence', teacherExperience: 'Ease of managing modes', guardrail: 'No public disclosure of learner vulnerability', owner: 'Camila', stopCondition: 'Stop if preference handling disrupts lesson flow' } },
      { id: 'camila-peer', title: 'Peer observation on interaction rhythm', behavior: 'Review correction placement across lesson phases', rationale: 'A coach-reported observation needs broader evidence.', mechanism: 'Human review can identify contextual rhythm patterns.', targetSegment: 'B1–C1 mixed', teacherEffort: 'Low', organizationalSupport: 'Peer observer', duration: '3 lessons', limitation: 'Observer effect', validationTarget: 'Identify two testable rhythm adaptations', owner: 'Peer teacher', experiment: { hypothesis: 'Peer observation can distinguish format effects from teacher technique.', context: 'Grammar, conversation, and exam-prep lessons', behaviorChange: 'Observe only; no automatic intervention', duration: '3 lessons', leadingIndicator: 'Correction timing by phase', learnerOutcome: 'Participation consistency', teacherExperience: 'Perceived fairness of feedback', guardrail: 'No ranking or score', owner: 'Peer teacher', stopCondition: 'Stop if observation lacks sufficient context' } },
    ],
    measurement: commonMeasurement,
    sharedPractice: { title: 'Separate fluency and accuracy moments', evidenceSummary: 'Correction quality remains strong; timing may affect participation differently by context.', context: 'Professional B1–C1 lessons with mixed fluency and accuracy goals', limitations: 'Learner preference and lesson format must be reviewed', confidence: 'Provisional · medium-low', owner: 'Academic quality lead', reviewDate: '2026-09-30' },
    safeguards: ['No inference of personality or motivation', 'No penalty for instructional style', 'Learner preference remains contextual', 'Human review before any shared-practice update'],
  },
]

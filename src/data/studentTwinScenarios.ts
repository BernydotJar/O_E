export type DecisionState = 'undecided' | 'approved' | 'deferred' | 'rejected'

export type Intervention = {
  id: string
  title: string
  owner: string
  rationale: string
  mechanism: string
  learnerEffort: string
  organizationEffort: string
  urgency: string
  limitation: string
  validationTarget: string
  projection: string[]
}

export type LearnerScenario = {
  id: string
  name: string
  context: string
  ageCategory: 'adult' | 'junior'
  goal: string
  targetOutcome: string
  targetDate: string
  proficiency: string
  momentum: string
  confidence: string
  assessmentBand: string
  assessmentConfidence: string
  importantUnknown: string
  dimensions: Array<{ label: string; value: string; source: string }>
  evidence: Array<{ date: string; source: string; kind: string; text: string; effect: string }>
  concerns: string[]
  counterSignals: string[]
  limitations: string[]
  interventions: Intervention[]
  measurement: Array<{ category: string; indicator: string }>
  safeguards: string[]
}

export const studentTwinScenarios: LearnerScenario[] = [
  {
    id: 'maya',
    name: 'Maya Chen',
    context: 'Adult professional · Career mobility',
    ageCategory: 'adult',
    goal: 'Qualify for an English-speaking customer-success role',
    targetOutcome: 'B2 speaking readiness',
    targetDate: '6 months',
    proficiency: 'B1 overall · A2+/B1 spontaneous speaking',
    momentum: 'Declining after schedule change',
    confidence: '46 / 100 · Self-reported',
    assessmentBand: 'Watch · synthetic range 35–50%',
    assessmentConfidence: 'Medium',
    importantUnknown: 'Whether schedule friction or speaking confidence is the dominant constraint.',
    dimensions: [
      { label: 'Proficiency', value: 'Stable', source: 'Assessment' },
      { label: 'Engagement rhythm', value: 'At risk', source: 'Derived pattern' },
      { label: 'Speaking confidence', value: 'Watch', source: 'Learner report' },
      { label: 'Misconception burden', value: 'Stable', source: 'Teacher report' },
      { label: 'Goal alignment', value: 'Strong', source: 'Learner report' },
      { label: 'Support responsiveness', value: 'Unknown', source: 'Insufficient evidence' },
    ],
    evidence: [
      { date: '14 days ago', source: 'Learning event', kind: 'Observed', text: 'Attendance rhythm declined from three sessions weekly to one.', effect: 'Increases concern' },
      { date: '10 days ago', source: 'Learner check-in', kind: 'Self-reported', text: 'Confidence pulse fell to 46/100 after a difficult live conversation.', effect: 'Increases concern' },
      { date: '7 days ago', source: 'Assessment', kind: 'Observed', text: 'Reading and listening remained stable at B1.', effect: 'Reduces concern' },
      { date: '3 days ago', source: 'Derived pattern', kind: 'Derived', text: 'Two speaking missions were opened but not completed.', effect: 'Increases concern' },
    ],
    concerns: ['Reduced live-session rhythm', 'Incomplete speaking missions', 'Lower self-reported confidence'],
    counterSignals: ['Goal remains explicit and time-bound', 'Reading and listening remain stable', 'Learner still opens assigned activities'],
    limitations: ['Not a diagnosis', 'Not evidence of intent to churn', 'Must not restrict access or change pricing'],
    interventions: [
      { id: 'micro', title: 'Confidence micro-mission', owner: 'AI practice assistant + learner', rationale: 'Lower the activation energy before the next live class.', mechanism: 'A 12-minute private rehearsal using the learner’s target job context.', learnerEffort: 'Low', organizationEffort: 'Low', urgency: 'Within 48 hours', limitation: 'May improve readiness but does not resolve schedule friction.', validationTarget: 'Complete two rehearsals and attend the next live class.', projection: ['Practice completion may rise', 'Confidence may move from watch to stable', 'Attendance effect remains uncertain'] },
      { id: 'schedule', title: 'Teacher outreach + schedule redesign', owner: 'Teacher or learner-success coach', rationale: 'Test whether the decline is operational rather than motivational.', mechanism: 'A short human conversation followed by a sustainable schedule reset.', learnerEffort: 'Medium', organizationEffort: 'Medium', urgency: 'Before next billing cycle', limitation: 'Requires human capacity and may not address speaking anxiety.', validationTarget: 'Restore two or more sessions weekly for 14 days.', projection: ['Session rhythm may recover', 'Support responsiveness becomes measurable', 'Speaking confidence may remain unchanged'] },
      { id: 'peer', title: 'Small peer speaking circle', owner: 'Teacher-led peer group', rationale: 'Increase social belonging and lower the pressure of one-to-one performance.', mechanism: 'A bounded group mission with learners pursuing similar career goals.', learnerEffort: 'Medium', organizationEffort: 'Medium', urgency: 'Within two weeks', limitation: 'Group matching and psychological safety require review.', validationTarget: 'Participate twice and report improved speaking comfort.', projection: ['Social participation may improve', 'Confidence may improve directionally', 'Causal effect requires controlled validation'] },
    ],
    measurement: [
      { category: 'Behavior', indicator: 'Sessions and speaking missions completed per week' },
      { category: 'Learning', indicator: 'Spontaneous-speaking rubric movement' },
      { category: 'Experience', indicator: 'Confidence and perceived relevance check-in' },
      { category: 'Continuation', indicator: 'Four-week learning rhythm and continuation intent' },
    ],
    safeguards: ['Data minimization', 'Purpose limited to learning support', 'Human review for consequential intervention', 'No punitive use'],
  },
  {
    id: 'leo',
    name: 'Leo Martinez',
    context: 'Junior learner · School confidence',
    ageCategory: 'junior',
    goal: 'Improve classroom confidence and school performance',
    targetOutcome: 'Age-appropriate speaking and comprehension growth',
    targetDate: 'School term',
    proficiency: 'Strong solo practice · limited live participation',
    momentum: 'Mixed',
    confidence: 'Not directly known',
    assessmentBand: 'Opportunity · participation transfer',
    assessmentConfidence: 'Low to medium',
    importantUnknown: 'Whether camera anxiety, language difficulty, or household context drives live-class avoidance.',
    dimensions: [
      { label: 'Proficiency', value: 'Developing', source: 'Assessment' },
      { label: 'Engagement rhythm', value: 'Mixed', source: 'Learning events' },
      { label: 'Speaking confidence', value: 'Unknown', source: 'No direct report' },
      { label: 'Misconception burden', value: 'Watch', source: 'Teacher report' },
      { label: 'Goal alignment', value: 'Stable', source: 'Guardian report' },
      { label: 'Support responsiveness', value: 'Strong in solo practice', source: 'Observed' },
    ],
    evidence: [
      { date: '12 days ago', source: 'Learning event', kind: 'Observed', text: 'Mobile vocabulary missions completed on four consecutive days.', effect: 'Reduces concern' },
      { date: '8 days ago', source: 'Teacher observation', kind: 'Teacher-reported', text: 'Learner answered correctly in chat but declined two live speaking turns.', effect: 'Increases concern' },
      { date: '5 days ago', source: 'Assessment', kind: 'Observed', text: 'Comprehension improved while spoken output remained limited.', effect: 'Mixed signal' },
      { date: '2 days ago', source: 'Derived pattern', kind: 'Derived', text: 'Solo activity completion is materially higher than live participation.', effect: 'Opportunity signal' },
    ],
    concerns: ['Low live speaking participation', 'Cause of avoidance is unknown', 'Junior context requires elevated controls'],
    counterSignals: ['Consistent mobile practice', 'Correct written responses', 'Comprehension is improving'],
    limitations: ['No autonomous contact', 'No ranking or penalty', 'No inference about home circumstances without evidence'],
    interventions: [
      { id: 'teacher-sequence', title: 'Low-pressure speaking sequence', owner: 'Teacher', rationale: 'Transfer confidence from private work into carefully scaffolded live participation.', mechanism: 'Predictable prompts, optional audio-only response, and progressive speaking turns.', learnerEffort: 'Low to medium', organizationEffort: 'Medium', urgency: 'Next live class', limitation: 'Teacher must adapt based on learner comfort.', validationTarget: 'Complete one voluntary speaking turn in each of three classes.', projection: ['Live participation may increase', 'Confidence remains indirectly observed', 'Teacher feedback is required'] },
      { id: 'guardian', title: 'Guardian-approved environment adjustment', owner: 'Guardian + learner-success team', rationale: 'Test whether schedule or environment contributes to avoidance.', mechanism: 'Minimum-necessary communication to agree on a suitable learning time and setup.', learnerEffort: 'Low', organizationEffort: 'Medium', urgency: 'Within one week', limitation: 'Must not disclose vulnerability beyond the approved purpose.', validationTarget: 'Stable environment for two consecutive live classes.', projection: ['Attendance conditions may improve', 'Cause of avoidance becomes clearer', 'No guaranteed speaking effect'] },
      { id: 'rehearsal', title: 'Private AI rehearsal', owner: 'Learner with guardian/teacher-approved boundaries', rationale: 'Allow safe practice before a live speaking turn.', mechanism: 'Short, non-persistent rehearsal with no open-ended memory.', learnerEffort: 'Low', organizationEffort: 'Low', urgency: 'Before next class', limitation: 'Requires age-aware controls and must not replace teacher judgment.', validationTarget: 'Complete rehearsal and voluntarily attempt one live response.', projection: ['Readiness may improve', 'Live transfer remains uncertain', 'No persistent learner memory is created'] },
    ],
    measurement: [
      { category: 'Behavior', indicator: 'Voluntary live participation attempts' },
      { category: 'Learning', indicator: 'Speaking and comprehension rubric movement' },
      { category: 'Experience', indicator: 'Age-appropriate comfort signal reviewed by a human' },
      { category: 'Continuation', indicator: 'Consistent participation across three weeks' },
    ],
    safeguards: ['Guardian-sensitive communication', 'Minimum necessary data', 'No open-ended persistent memory', 'Human approval before consequential action', 'No peer exposure of vulnerability'],
  },
  {
    id: 'sofia',
    name: 'Sofia Alvarez',
    context: 'Advanced learner · Certification target',
    ageCategory: 'adult',
    goal: 'Reach a specific academic or professional certification score',
    targetOutcome: 'C1-level precision',
    targetDate: '8 months',
    proficiency: 'High fluency · persistent precision gaps',
    momentum: 'High engagement, plateauing outcome',
    confidence: '78 / 100 · Self-reported',
    assessmentBand: 'Opportunity · targeted deliberate practice',
    assessmentConfidence: 'Medium',
    importantUnknown: 'Whether the plateau reflects assessment variance or a stable misconception cluster.',
    dimensions: [
      { label: 'Proficiency', value: 'Strong', source: 'Assessment' },
      { label: 'Engagement rhythm', value: 'Strong', source: 'Learning events' },
      { label: 'Speaking confidence', value: 'Strong', source: 'Learner report' },
      { label: 'Misconception burden', value: 'Watch', source: 'Derived pattern' },
      { label: 'Goal alignment', value: 'Strong', source: 'Learner report' },
      { label: 'Support responsiveness', value: 'Stable', source: 'Previous intervention' },
    ],
    evidence: [
      { date: '21 days ago', source: 'Assessment', kind: 'Observed', text: 'Overall result remained within the same band across two attempts.', effect: 'Increases concern' },
      { date: '14 days ago', source: 'Teacher observation', kind: 'Teacher-reported', text: 'Recurring article and pronunciation patterns appear in spontaneous speech.', effect: 'Increases concern' },
      { date: '7 days ago', source: 'Learning event', kind: 'Observed', text: 'Learner completed all assigned general content.', effect: 'Reduces concern' },
      { date: '2 days ago', source: 'Derived pattern', kind: 'Derived', text: 'General practice volume increased without target-skill movement.', effect: 'Opportunity signal' },
    ],
    concerns: ['Outcome plateau', 'Recurring precision patterns', 'General practice may be poorly targeted'],
    counterSignals: ['High engagement', 'Strong confidence', 'Consistent completion'],
    limitations: ['Assessment variance is unresolved', 'Correlation does not establish the cause of plateau', 'Specialist review may be required'],
    interventions: [
      { id: 'specific', title: 'Misconception-specific practice plan', owner: 'AI assistant + curriculum-approved content', rationale: 'Redirect effort from general exposure to repeated precision gaps.', mechanism: 'Short deliberate-practice cycles with explicit evidence and teacher review.', learnerEffort: 'Medium', organizationEffort: 'Low to medium', urgency: 'This learning cycle', limitation: 'Depends on reliable misconception classification.', validationTarget: 'Reduce repeated target errors across three assessed samples.', projection: ['Precision may improve', 'General fluency should remain stable', 'Requires rubric-based validation'] },
      { id: 'specialist', title: 'Specialist teacher review', owner: 'Specialist teacher', rationale: 'Determine whether the pattern reflects technique, misconception, or assessment design.', mechanism: 'Review representative samples and define a bounded coaching plan.', learnerEffort: 'Medium', organizationEffort: 'High', urgency: 'Within two weeks', limitation: 'Specialist capacity is constrained.', validationTarget: 'Produce an evidence-based diagnosis of the learning gap, not the learner.', projection: ['Uncertainty may decrease', 'Intervention precision may improve', 'Outcome lift remains unproven'] },
      { id: 'recalibrate', title: 'Assessment recalibration', owner: 'Learning science + assessment team', rationale: 'Test whether the apparent plateau is partly measurement noise.', mechanism: 'Collect alternate evidence using a second rubric or task format.', learnerEffort: 'Medium', organizationEffort: 'Medium', urgency: 'Before escalating instruction', limitation: 'Additional testing can increase learner burden.', validationTarget: 'Confirm or reject the plateau using independent evidence.', projection: ['Assessment confidence may increase', 'Instruction may be revised or stopped', 'No assumed proficiency gain'] },
    ],
    measurement: [
      { category: 'Behavior', indicator: 'Completion of targeted deliberate-practice cycles' },
      { category: 'Learning', indicator: 'Frequency of repeated precision errors' },
      { category: 'Experience', indicator: 'Perceived relevance and challenge calibration' },
      { category: 'Continuation', indicator: 'Sustained progression toward certification date' },
    ],
    safeguards: ['Purpose-limited use', 'Evidence review before escalation', 'No punitive ranking', 'Delete scenario data after the approved retention period'],
  },
]

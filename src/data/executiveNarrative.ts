export type NarrativeStage = {
  id: string
  index: string
  title: string
  question: string
  message: string
  presenterNote: string
}

export const narrativeStages: NarrativeStage[] = [
  {
    id: 'top',
    index: '01',
    title: 'Founding question',
    question: 'What is the proposal?',
    message: 'Reimagine Open English as one AI-native learning company, not a collection of disconnected AI features.',
    presenterNote: 'Lead with the operating-model change, not with a model, chatbot, or cloud diagram.',
  },
  {
    id: 'urgency',
    index: '02',
    title: 'Why change now',
    question: 'Why is this urgent?',
    message: 'Learner expectations, model capability, delivery economics, and organizational memory are changing at the same time.',
    presenterNote: 'The risk is not only moving slowly. It is investing in isolated capabilities that never compound.',
  },
  {
    id: 'hypotheses',
    index: '03',
    title: 'Discovery hypotheses',
    question: 'What may prevent compounding today?',
    message: 'Validate where product, learner, teacher, enterprise, and delivery signals remain fragmented before prescribing architecture.',
    presenterNote: 'These are discovery hypotheses derived from the role brief, not claims of internal access.',
  },
  {
    id: 'definition',
    index: '04',
    title: 'AI-native definition',
    question: 'What does AI-native mean?',
    message: 'Every interaction creates evidence that can improve the learner, teacher, curriculum, platform, and company.',
    presenterNote: 'The unit of value is a governed learning loop, not an AI feature.',
  },
  {
    id: 'transformation',
    index: '05',
    title: 'Product + company',
    question: 'How do product and company change together?',
    message: 'The learning experience and the operating model share the same evidence, evaluation, approval, and outcome disciplines.',
    presenterNote: 'Show why agentic engineering belongs in the same strategy as adaptive learning.',
  },
  {
    id: 'operating-model',
    index: '06',
    title: 'Future operating model',
    question: 'What capabilities form the target?',
    message: 'Connect experiences, intelligence, platform capabilities, and enterprise systems without replacing every system of record.',
    presenterNote: 'Differentiated intelligence is built; specialist systems are integrated.',
  },
  {
    id: 'choices',
    index: '07',
    title: 'Strategic choices',
    question: 'What do we build, integrate, and defer?',
    message: 'Invest first in learning intelligence, evidence controls, and measurable pilots—not a big-bang platform replacement.',
    presenterNote: 'Explicit deferrals demonstrate capital discipline and technical judgment.',
  },
  {
    id: 'economics',
    index: '08',
    title: 'Economics, impact, and risk',
    question: 'How do we know it works and scales?',
    message: 'Separate model quality from educational impact, then connect both to cost per lesson and cost per successful outcome.',
    presenterNote: 'A benchmark score does not prove learning impact. A pilot without economics does not prove scale.',
  },
  {
    id: 'decisions',
    index: '09',
    title: 'Executive decisions',
    question: 'What must leadership decide now?',
    message: 'Approve discovery, two bounded pilots, a shared measurement model, and the platform decisions that evidence supports.',
    presenterNote: 'End with decisions and gates, not a technology shopping list.',
  },
]

export const operatingPrinciples = [
  ['Flexible', 'Multiple learner types, curricula, channels, and delivery models.'],
  ['Responsible', 'Human approval, source agency, privacy, and auditable evidence.'],
  ['Responsive', 'Current behavior and measured outcomes change the next action.'],
  ['Affordable', 'Selective compute, routing, caching, and deterministic logic.'],
  ['Adaptive', 'Difficulty, pace, modality, and intervention change by learner state.'],
  ['Personalized', 'Individual relevance without lowering instructional quality.'],
]

export const discoveryHypotheses = [
  {
    title: 'Product signals may not compound',
    signal: 'The role brief spans Open English, Junior, and Open Mundo.',
    consequence: 'Duplicated capabilities and fragmented learner context can slow improvement.',
    question: 'Which learner, content, and outcome signals are shared today?',
  },
  {
    title: 'Knowledge may leave with teams',
    signal: 'The mandate explicitly calls for an Organizational Cortex.',
    consequence: 'Decisions, incidents, experiments, and delivery lessons may be repeatedly rediscovered.',
    question: 'Where are architectural and product decisions recorded and evaluated?',
  },
  {
    title: 'Quality loops may be disconnected',
    signal: 'The mandate combines product AI, engineering agents, QA, and observability.',
    consequence: 'Delivery speed can rise without equivalent confidence or learning impact.',
    question: 'What evidence is required today to promote a feature or model change?',
  },
  {
    title: 'Enterprise coupling may constrain change',
    signal: 'Salesforce, NetSuite, Zuora, Yuno, identity, and compliance are named dependencies.',
    consequence: 'Learning innovation can become coupled to billing, CRM, ERP, and payment release cycles.',
    question: 'Which domains are systems of record, and which require real-time orchestration?',
  },
]

export const operatingLayers = [
  {
    name: 'Experience',
    items: ['Student experience', 'Teacher experience', 'Internal AI experiences', 'Social learning moments'],
  },
  {
    name: 'Intelligence',
    items: ['Student Digital Twin', 'Teacher Intelligence', 'Organizational Cortex', 'Evaluation + human approval'],
  },
  {
    name: 'Platform',
    items: ['Unified Learning Platform', 'Learning Graph', 'Curriculum refresh loop', 'Agentic Build Engine', 'Model routing'],
  },
  {
    name: 'Enterprise systems',
    items: ['Salesforce', 'NetSuite', 'Zuora', 'Yuno', 'Identity, compliance, reporting'],
  },
]

export const strategicChoices = {
  build: ['Learning Graph', 'Student Digital Twin', 'Teacher Intelligence', 'Organizational Cortex', 'AI evaluation and impact framework'],
  integrate: ['Salesforce', 'NetSuite', 'Zuora', 'Yuno', 'Identity providers', 'Model, security, and observability platforms'],
  defer: ['Autonomous curriculum publication', 'Custom foundation model', 'Big-bang legacy replacement', 'Ungoverned persistent memory', 'Premature multi-region complexity'],
}

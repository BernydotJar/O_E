export type DemoRole = 'learner' | 'teacher' | 'coach' | 'learning_product' | 'operations' | 'governance_admin' | 'executive'
export type Capability = 'home' | 'learners' | 'teachers' | 'interventions' | 'outcomes' | 'knowledge' | 'operations' | 'admin' | 'governance' | 'integrations' | 'executive'

export const roleCapabilities: Record<DemoRole, Capability[]> = {
  learner: ['home', 'learners', 'outcomes', 'knowledge'],
  teacher: ['home', 'learners', 'teachers', 'interventions', 'outcomes', 'knowledge'],
  coach: ['home', 'learners', 'teachers', 'interventions', 'outcomes', 'knowledge', 'operations'],
  learning_product: ['home', 'learners', 'teachers', 'interventions', 'outcomes', 'knowledge'],
  operations: ['home', 'learners', 'interventions', 'outcomes', 'knowledge', 'operations'],
  governance_admin: ['home', 'learners', 'teachers', 'interventions', 'outcomes', 'knowledge', 'operations', 'admin', 'governance', 'integrations'],
  executive: ['home', 'outcomes', 'knowledge', 'executive'],
}

export const can = (role: DemoRole, capability: Capability) => roleCapabilities[role].includes(capability)

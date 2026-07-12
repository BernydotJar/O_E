import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import TeacherIntelligenceWorkspace from './TeacherIntelligenceWorkspace'

beforeEach(() => {
  document.body.innerHTML = '<main><section id="economics"></section></main>'
})

describe('Teacher Intelligence workspace', () => {
  it('renders three synthetic teacher scenarios and persistent disclosure', async () => {
    render(<TeacherIntelligenceWorkspace />)

    expect(await screen.findByRole('tab', { name: /elena ruiz/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /marcus thompson/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /camila santos/i })).toBeInTheDocument()
    expect(screen.getByText(/synthetic and non-production/i)).toBeInTheDocument()
    expect(screen.getByText(/no real teacher, learner, protected-characteristic, employment, or open english internal data/i)).toBeInTheDocument()
  })

  it('switches scenarios and resets local coaching decisions', async () => {
    const user = userEvent.setup()
    render(<TeacherIntelligenceWorkspace />)

    const option = await screen.findByRole('heading', { name: /preserve the conversation pattern/i })
    const card = within(option.closest('article') as HTMLElement)
    await user.click(card.getByRole('button', { name: /accepted for experiment/i }))
    expect(card.getByRole('button', { name: /accepted for experiment/i })).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('tab', { name: /marcus thompson/i }))
    expect(screen.getByRole('heading', { name: 'Marcus Thompson' })).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /elena ruiz/i }))
    const resetCard = within(screen.getByRole('heading', { name: /preserve the conversation pattern/i }).closest('article') as HTMLElement)
    expect(resetCard.getByRole('button', { name: /accepted for experiment/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('separates evidence categories, confidence, limitations, and unknowns', async () => {
    render(<TeacherIntelligenceWorkspace />)
    await screen.findByRole('heading', { name: /improve the system without reducing the teacher to a score/i })

    for (const label of ['Observed lesson event', 'Learner outcome', 'Teacher-reported', 'Coach-reported', 'Derived pattern', 'Unknown']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/association is not causation/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/no beginner evidence/i)).toBeInTheDocument()
  })

  it('shows contextual behavior-to-outcome reasoning and non-causal boundaries', async () => {
    render(<TeacherIntelligenceWorkspace />)
    expect((await screen.findAllByText('OBSERVED BEHAVIOR')).length).toBeGreaterThan(0)

    expect(screen.getAllByText('ASSOCIATED SIGNAL').length).toBeGreaterThan(0)
    expect(screen.getAllByText('PLAUSIBLE MECHANISM').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Counter-evidence').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Transferability boundary').length).toBeGreaterThan(0)
    expect(screen.getByText(/association organizes inquiry\. it does not prove causality/i)).toBeInTheDocument()
    expect(screen.getByText(/no behavior is universally effective/i)).toBeInTheDocument()
  })

  it('provides complete coaching metadata and teacher-owned decisions', async () => {
    const user = userEvent.setup()
    render(<TeacherIntelligenceWorkspace />)

    const option = await screen.findByRole('heading', { name: /adapt for beginner learners/i })
    const card = within(option.closest('article') as HTMLElement)

    for (const field of ['Behavior', 'Mechanism', 'Target segment', 'Effort + support', 'Duration', 'Limitation', 'Validation target']) {
      expect(card.getByText(field)).toBeInTheDocument()
    }

    for (const decision of ['Accepted for experiment', 'Adapted', 'Deferred', 'Rejected']) {
      const button = card.getByRole('button', { name: decision })
      await user.click(button)
      expect(button).toHaveAttribute('aria-pressed', 'true')
    }
    expect(screen.getByText(/no recommendation is executed automatically/i)).toBeInTheDocument()
  })

  it('changes the bounded experiment plan with the selected coaching option', async () => {
    const user = userEvent.setup()
    render(<TeacherIntelligenceWorkspace />)

    const option = await screen.findByRole('heading', { name: /request peer replication/i })
    const card = within(option.closest('article') as HTMLElement)
    await user.click(card.getByRole('button', { name: /build experiment plan/i }))

    const plan = screen.getByRole('region', { name: /bounded experiment plan/i })
    expect(within(plan).getByRole('heading', { name: /request peer replication/i })).toBeInTheDocument()
    for (const field of ['HYPOTHESIS', 'CONTEXT', 'BEHAVIOR CHANGE', 'DURATION', 'LEADING INDICATOR', 'LEARNER OUTCOME', 'TEACHER EXPERIENCE', 'GUARDRAIL', 'REVIEW OWNER', 'STOP CONDITION']) {
      expect(within(plan).getByText(field)).toBeInTheDocument()
    }
    expect(within(plan).getByText(/teacher consent and adaptation are required/i)).toBeInTheDocument()
    expect(within(plan).getByText(/original evidence remains unchanged/i)).toBeInTheDocument()
  })

  it('shows multidimensional outcomes, gates, and provisional shared practice memory', async () => {
    render(<TeacherIntelligenceWorkspace />)
    await screen.findByText('OUTCOME REVIEW')

    for (const category of ['Learner behavior', 'Learning quality', 'Learner experience', 'Teacher experience', 'Feasibility', 'Segment consistency']) {
      expect(screen.getByText(category)).toBeInTheDocument()
    }
    for (const gate of ['Preserve', 'Adapt', 'Expand carefully', 'Collect more evidence', 'Stop']) {
      expect(screen.getByRole('button', { name: gate })).toBeInTheDocument()
    }
    expect(screen.getByText('PROVISIONAL PRACTICE')).toBeInTheDocument()
    expect(screen.getByText('Applicable context')).toBeInTheDocument()
    expect(screen.getByText('Known limitations')).toBeInTheDocument()
    expect(screen.getByText('Review date')).toBeInTheDocument()
    expect(screen.getByText(/never a universal script/i)).toBeInTheDocument()
  })

  it('makes anti-surveillance and employment boundaries explicit', async () => {
    render(<TeacherIntelligenceWorkspace />)
    await screen.findByText('RESPONSIBLE COACHING CONTROLS')

    expect(screen.getByText('Not an employment decision system')).toBeInTheDocument()
    expect(screen.getByText('No opaque teacher score')).toBeInTheDocument()
    expect(screen.getByText('No leaderboard or punitive ranking')).toBeInTheDocument()
    expect(screen.getByText('No protected-characteristic inference')).toBeInTheDocument()
    expect(screen.getByText('Teacher contestability is required')).toBeInTheDocument()
  })
})

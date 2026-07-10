import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import StudentTwinWorkspace from './StudentTwinWorkspace'

describe('Student Digital Twin workspace', () => {
  it('renders three clearly synthetic learner scenarios', () => {
    render(<StudentTwinWorkspace />)

    expect(screen.getByRole('tab', { name: /maya chen/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /leo martinez/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /sofia alvarez/i })).toBeInTheDocument()
    expect(screen.getByText(/synthetic only/i)).toBeInTheDocument()
    expect(screen.getByText(/no real learner, open english, protected-characteristic, or production data/i)).toBeInTheDocument()
  })

  it('switches scenarios and exposes a scenario-specific important unknown', async () => {
    const user = userEvent.setup()
    render(<StudentTwinWorkspace />)

    expect(screen.getByRole('heading', { name: 'Maya Chen' })).toBeInTheDocument()
    expect(screen.getAllByText(/schedule friction or speaking confidence/i).length).toBeGreaterThan(0)

    await user.click(screen.getByRole('tab', { name: /leo martinez/i }))
    expect(screen.getByRole('heading', { name: 'Leo Martinez' })).toBeInTheDocument()
    expect(screen.getAllByText(/camera anxiety, language difficulty, or household context/i).length).toBeGreaterThan(0)
  })

  it('keeps evidence provenance and explainability categories visible', () => {
    render(<StudentTwinWorkspace />)

    expect(screen.getByText(/learning event · observed/i)).toBeInTheDocument()
    expect(screen.getByText(/learner check-in · self-reported/i)).toBeInTheDocument()
    expect(screen.getByText(/derived pattern · derived/i)).toBeInTheDocument()
    expect(screen.getByText('SIGNALS INCREASING CONCERN')).toBeInTheDocument()
    expect(screen.getByText('COUNTER-SIGNALS')).toBeInTheDocument()
    expect(screen.getByText('IMPORTANT UNKNOWNS')).toBeInTheDocument()
    expect(screen.getByText('USE LIMITATIONS')).toBeInTheDocument()
  })

  it('shows complete intervention metadata and human decision controls', async () => {
    const user = userEvent.setup()
    render(<StudentTwinWorkspace />)

    const intervention = screen.getByRole('heading', { name: /confidence micro-mission/i }).closest('article')
    expect(intervention).not.toBeNull()
    const card = within(intervention as HTMLElement)

    expect(card.getByText(/ai practice assistant \+ learner/i)).toBeInTheDocument()
    expect(card.getByText('Mechanism')).toBeInTheDocument()
    expect(card.getByText('Effort')).toBeInTheDocument()
    expect(card.getByText('Urgency')).toBeInTheDocument()
    expect(card.getByText('Limitation')).toBeInTheDocument()
    expect(card.getByText('Validation target')).toBeInTheDocument()

    await user.click(card.getByRole('button', { name: 'Approved' }))
    expect(card.getByRole('button', { name: 'Approved' })).toHaveAttribute('aria-pressed', 'true')

    await user.click(card.getByRole('button', { name: 'Deferred' }))
    expect(card.getByRole('button', { name: 'Deferred' })).toHaveAttribute('aria-pressed', 'true')

    await user.click(card.getByRole('button', { name: 'Rejected' }))
    expect(card.getByRole('button', { name: 'Rejected' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('opens a directional projection without replacing original evidence', async () => {
    const user = userEvent.setup()
    render(<StudentTwinWorkspace />)

    expect(screen.getByText(/attendance rhythm declined from three sessions weekly to one/i)).toBeInTheDocument()
    const scheduleCard = screen.getByRole('heading', { name: /teacher outreach \+ schedule redesign/i }).closest('article')
    expect(scheduleCard).not.toBeNull()

    await user.click(within(scheduleCard as HTMLElement).getByRole('button', { name: /explore projection/i }))

    expect(screen.getByText(/attendance rhythm declined from three sessions weekly to one/i)).toBeInTheDocument()
    const projection = screen.getByRole('region', { name: /counterfactual projection/i })
    expect(within(projection).getByRole('heading', { name: /teacher outreach \+ schedule redesign/i })).toBeInTheDocument()
    expect(within(projection).getByText(/original evidence remains unchanged/i)).toBeInTheDocument()
    expect(within(projection).getByText(/session rhythm may recover/i)).toBeInTheDocument()
    expect(within(projection).getByText(/does not establish causality or guarantee an outcome/i)).toBeInTheDocument()
  })

  it('elevates age-aware safeguards for the junior learner', async () => {
    const user = userEvent.setup()
    render(<StudentTwinWorkspace />)

    await user.click(screen.getByRole('tab', { name: /leo martinez/i }))

    expect(screen.getByRole('heading', { name: /junior safeguards elevated/i })).toBeInTheDocument()
    expect(screen.getByText('Guardian-sensitive communication')).toBeInTheDocument()
    expect(screen.getByText('Minimum necessary data')).toBeInTheDocument()
    expect(screen.getByText('No open-ended persistent memory')).toBeInTheDocument()
    expect(screen.getByText(/no autonomous contact/i)).toBeInTheDocument()
    expect(screen.getByText(/punitive ranking, access restriction, pricing decisions/i)).toBeInTheDocument()
  })

  it('shows outcome measurement and explicit decision gates', () => {
    render(<StudentTwinWorkspace />)

    for (const category of ['Behavior', 'Learning', 'Experience', 'Continuation']) {
      expect(screen.getByText(category)).toBeInTheDocument()
    }

    for (const gate of ['Continue', 'Revise', 'Escalate', 'Stop']) {
      expect(screen.getByText(gate)).toBeInTheDocument()
    }
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Open English AI-Native executive experience', () => {
  it('renders the executive transformation thesis and synthetic-data disclosure', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /what if open english were founded today/i })).toBeInTheDocument()
    expect(screen.getByText(/synthetic scenarios\. no proprietary or production data/i)).toBeInTheDocument()
  })

  it('labels current-state statements as discovery hypotheses', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /start with hypotheses, not invented certainty/i })).toBeInTheDocument()
    expect(screen.getAllByText('TO VALIDATE')).toHaveLength(4)
    expect(screen.getByText(/they are not claims of internal access/i)).toBeInTheDocument()
  })

  it('shows the approved operating principles and future-state layers', () => {
    render(<App />)

    for (const principle of ['Flexible', 'Responsible', 'Responsive', 'Affordable', 'Adaptive', 'Personalized']) {
      expect(screen.getByText(principle)).toBeInTheDocument()
    }

    for (const layer of ['Experience', 'Intelligence', 'Platform', 'Enterprise systems']) {
      expect(screen.getByRole('heading', { name: layer })).toBeInTheDocument()
    }
  })

  it('separates build, integrate, and defer decisions', () => {
    render(<App />)

    expect(screen.getByText('BUILD')).toBeInTheDocument()
    expect(screen.getByText('INTEGRATE')).toBeInTheDocument()
    expect(screen.getByText('DEFER')).toBeInTheDocument()
    expect(screen.getByText(/autonomous curriculum publication/i)).toBeInTheDocument()
  })

  it('separates technical evidence from educational impact', () => {
    render(<App />)

    expect(screen.getByText('MODEL + PLATFORM EVIDENCE')).toBeInTheDocument()
    expect(screen.getByText('EDUCATIONAL + PRODUCT IMPACT')).toBeInTheDocument()
    expect(screen.getByText(/cost per successful outcome/i)).toBeInTheDocument()
    expect(screen.getByText(/model routing/i)).toBeInTheDocument()
  })

  it('runs the guided Executive Tour and supports navigation and exit', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /start the 3-minute tour/i }))
    expect(screen.getByLabelText('Executive Tour')).toBeInTheDocument()
    expect(screen.getByText('01 / 09')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /founding question/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('02 / 09')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /why change now/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.getByText('01 / 09')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Exit' }))
    expect(screen.queryByLabelText('Executive Tour')).not.toBeInTheDocument()
  })

  it('shows the complete organizational learning loop', () => {
    render(<App />)

    for (const step of ['Interaction', 'Signals', 'Evaluation', 'Memory', 'Recommendation', 'Outcome']) {
      expect(screen.getByText(step)).toBeInTheDocument()
    }
  })

  it('preserves student, teacher, and engineering evidence views', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText(/attendance declined 18%/i)).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /teacher intelligence/i }))
    expect(screen.getByText(/top cohort asks 2\.4× more open questions/i)).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /build engine/i }))
    expect(screen.getByText(/spec-001 approved/i)).toBeInTheDocument()
  })

  it('keeps evidence, inference, action, and validation visibly separate', () => {
    render(<App />)

    expect(screen.getByText('OBSERVED EVIDENCE')).toBeInTheDocument()
    expect(screen.getByText('MODEL INFERENCE')).toBeInTheDocument()
    expect(screen.getByText('HUMAN-OWNED ACTION')).toBeInTheDocument()
    expect(screen.getByText('VALIDATION TARGET')).toBeInTheDocument()
  })
})

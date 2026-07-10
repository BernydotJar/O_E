import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Organizational Cortex MVP', () => {
  it('renders the executive transformation thesis and synthetic-data disclosure', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /what if open english were founded today/i })).toBeInTheDocument()
    expect(screen.getByText(/synthetic scenarios\. no proprietary or production data/i)).toBeInTheDocument()
  })

  it('shows the complete organizational learning loop', () => {
    render(<App />)

    for (const step of ['Interaction', 'Signals', 'Evaluation', 'Memory', 'Recommendation', 'Outcome']) {
      expect(screen.getByText(step)).toBeInTheDocument()
    }
  })

  it('switches between student, teacher, and engineering evidence views', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText(/attendance declined 18%/i)).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /teacher intelligence/i }))
    expect(screen.getByText(/top cohort asks 2\.4× more open questions/i)).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /build engine/i }))
    expect(screen.getByText(/spec-000 approved/i)).toBeInTheDocument()
  })

  it('keeps evidence, inference, action, and validation visibly separate', () => {
    render(<App />)

    expect(screen.getByText('OBSERVED EVIDENCE')).toBeInTheDocument()
    expect(screen.getByText('MODEL INFERENCE')).toBeInTheDocument()
    expect(screen.getByText('HUMAN-OWNED ACTION')).toBeInTheDocument()
    expect(screen.getByText('VALIDATION TARGET')).toBeInTheDocument()
  })
})

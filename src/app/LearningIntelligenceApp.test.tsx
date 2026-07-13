import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import LearningIntelligenceApp from './LearningIntelligenceApp'

const renderAt = (path = '/') => {
  window.history.replaceState({}, '', path)
  return render(<LearningIntelligenceApp />)
}

describe('Learning Intelligence application shell', () => {
  beforeEach(() => window.history.replaceState({}, '', '/'))

  it('makes Home the default and preserves ordered primary navigation', () => {
    renderAt()
    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument()
    const links = screen.getByRole('navigation', { name: 'Primary navigation' }).querySelectorAll('a')
    expect(Array.from(links).map(link => link.textContent)).toEqual(['Home','Learners','Teachers','Interventions','Outcomes','Knowledge','Operations'])
    expect(screen.queryByText('Executive Experience')).not.toBeInTheDocument()
  })

  it('supports learner deep links and bounded Student Twin composition', () => {
    renderAt('/learners/maria-santos')
    expect(screen.getByRole('heading', { name: /Learners: María Santos/ })).toBeInTheDocument()
    expect(screen.getByLabelText(/Student Digital Twin/i)).toBeInTheDocument()
    expect(screen.getByText(/Synthetic data/i)).toBeInTheDocument()
  })

  it('supports teacher deep links and bounded Teacher Intelligence composition', () => {
    renderAt('/teachers/elena-ruiz')
    expect(screen.getByRole('heading', { name: /Teachers: Elena Ruiz/ })).toBeInTheDocument()
    expect(screen.getByLabelText(/Teacher Intelligence/i)).toBeInTheDocument()
  })

  it('keeps the executive route denied until role and entitlement are explicit', async () => {
    const user = userEvent.setup()
    renderAt('/strategic/executive')
    expect(screen.getByRole('heading', { name: /do not have access/i })).toBeInTheDocument()
    await user.selectOptions(screen.getByRole('combobox', { name: 'Demo role' }), 'executive')
    await user.click(screen.getByRole('button', { name: /Enable executive demo entitlement/i }))
    window.history.pushState({}, '', '/strategic/executive')
    window.dispatchEvent(new PopStateEvent('popstate'))
    expect(await screen.findByRole('heading', { name: 'Executive Experience' })).toBeInTheDocument()
  })

  it('switches centralized shell messages to Spanish', async () => {
    const user = userEvent.setup()
    renderAt()
    await user.selectOptions(screen.getByRole('combobox', { name: 'Language' }), 'es')
    expect(screen.getByRole('heading', { name: 'Inicio' })).toBeInTheDocument()
    expect(screen.getByText(/no es autenticación/i)).toBeInTheDocument()
  })

  it('renders not-found recovery without restricted metadata', () => {
    renderAt('/private/missing-record')
    expect(screen.getByRole('heading', { name: /not found/i })).toBeInTheDocument()
    expect(screen.queryByText(/missing-record/i)).not.toBeInTheDocument()
  })
})

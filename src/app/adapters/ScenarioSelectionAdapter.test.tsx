import { render, screen } from '@testing-library/react'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import ScenarioSelectionAdapter from './ScenarioSelectionAdapter'

function FakeScenarios() {
  const [selected, setSelected] = useState('Maya Chen')
  return <div>{['Maya Chen', 'Leo Martinez'].map((name) => <button key={name} role="tab" aria-selected={selected === name} onClick={() => setSelected(name)}>{name}</button>)}</div>
}

describe('ScenarioSelectionAdapter', () => {
  it('selects the deep-linked scenario', async () => {
    render(<ScenarioSelectionAdapter scenarioName="Leo Martinez"><FakeScenarios /></ScenarioSelectionAdapter>)
    expect(await screen.findByRole('tab', { name: 'Leo Martinez', selected: true })).toBeInTheDocument()
  })

  it('provides the legacy teacher portal anchor only when requested', () => {
    const { container } = render(<ScenarioSelectionAdapter scenarioName="Elena Ruiz" legacyTeacherPortal><div /></ScenarioSelectionAdapter>)
    expect(container.querySelector('#economics')).toBeInTheDocument()
  })
})

import ReproFail from '../ReproFail.svelte'
import ReproSuccess1 from '../ReproSuccess1.svelte'
import ReproSuccess2 from '../ReproSuccess2.svelte'
import ReproSuccess3 from '../ReproSuccess3.svelte'
import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/svelte'
import { test, expect } from 'vitest'

test.skip('ReproFail', () => {
  const result = render(ReproFail)
  expect(result.container).toHaveTextContent('Dynamic')
})

test('ReproSuccess1', () => {
  const result = render(ReproSuccess1)
  expect(result.container).toHaveTextContent('Static Works')
})

test('ReproSuccess2', () => {
  const result = render(ReproSuccess2)
  expect(result.container).toHaveTextContent('Dynamic Works')
})

test('ReproSuccess3', () => {
  const result = render(ReproSuccess3)
  expect(result.container).toHaveTextContent('Dynamic Works')
})

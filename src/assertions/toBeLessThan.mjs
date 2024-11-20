import { AssertionError } from '../errors/assertion.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { indentLine } from '../utils/transform.mjs'
import { EOL } from 'os'

export const toBeLessThan = (actual, expected) => {
  if (typeof actual !== 'number') {
    throw new RunnerError(
      indentLine(`Expected: ${typeof actual} ${actual} is not a number`)
    )
  }
  if (typeof expected !== 'number') {
    throw new RunnerError(
      indentLine(`Received: ${typeof expected} ${expected} is not a number`)
    )
  }
  if (actual > expected) {
    throw new AssertionError(
      indentLine('Expected: <actual>') +
        EOL +
        indentLine('to be less than') +
        EOL +
        indentLine('Received: <expected>'),
      {
        actual,
        expected,
      }
    )
  }
}

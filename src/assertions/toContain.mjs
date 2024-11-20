import { AssertionError } from '../errors/assertion.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { indentLine } from '../utils/transform.mjs'
import { EOL } from 'os'

export const toContain = (actual, expected) => {
  if (!Array.isArray(actual) && typeof actual !== 'string') {
    if (!Array.isArray(actual)) {
      throw new RunnerError(
        indentLine(`Received: ${typeof actual} ${actual} is not an array`)
      )
    }
    if (typeof actual !== 'string') {
      throw new RunnerError(
        indentLine(`Received: ${typeof actual} ${actual} is not a string`)
      )
    }
  }

  if (!actual.includes(expected)) {
    throw new AssertionError(
      indentLine('Expected: <expected>') +
        EOL +
        indentLine('to contain') +
        EOL +
        indentLine('Received: <actual>'),
      {
        actual,
        expected,
      }
    )
  }
}

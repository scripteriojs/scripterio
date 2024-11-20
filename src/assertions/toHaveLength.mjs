import { AssertionError } from '../errors/assertion.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { indentLine } from '../utils/transform.mjs'
import { EOL } from 'os'

export const toHaveLength = (actual, expected) => {
  if (!Array.isArray(actual)) {
    throw new RunnerError(
      indentLine(`Received: ${typeof actual} ${actual} is not an array`)
    )
  }
  if (typeof expected !== 'number') {
    throw new RunnerError(
      indentLine(`Expected: ${typeof expected} ${expected} is not a number`)
    )
  }
  if (actual.length !== expected) {
    throw new AssertionError(
      indentLine('Expected: <expected>') +
        EOL +
        indentLine('Received: <actual>'),
      {
        actual: actual.length,
        expected,
      }
    )
  }
}

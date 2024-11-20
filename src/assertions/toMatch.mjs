import { AssertionError } from '../errors/assertion.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { indentLine } from '../utils/transform.mjs'
import { EOL } from 'os'

export const toMatch = (actual, expected) => {
  if (typeof actual !== 'string') {
    throw new RunnerError(
      indentLine(`Received: ${typeof actual} ${actual} is not a string`)
    )
  }

  if (!(expected instanceof RegExp) && typeof expected !== 'string') {
    throw new RunnerError(
      indentLine(
        `Expected: ${typeof expected} ${expected} is not a RegExp or string`
      )
    )
  }

  if (expected instanceof RegExp) {
    if (!expected.test(actual)) {
      throw new AssertionError(
        indentLine('Expected: <expected>') +
          EOL +
          indentLine('to match') +
          EOL +
          indentLine('Received: <actual>'),
        {
          actual,
          expected,
        }
      )
    }
  } else if (!actual.includes(expected)) {
    throw new AssertionError(
      indentLine('Expected: <expected>') +
        EOL +
        indentLine('to match') +
        EOL +
        indentLine('Received: <actual>'),
      {
        actual,
        expected,
      }
    )
  }
}

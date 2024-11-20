import { AssertionError } from '../errors/assertion.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { indentLine } from '../utils/transform.mjs'

export const toBeTruthy = (actual) => {
  if (typeof actual !== 'boolean') {
    throw new RunnerError(
      indentLine(`Received: ${typeof actual} ${actual} is not a boolean value`)
    )
  }
  if (actual !== true) {
    throw new AssertionError(indentLine('Received: <actual> to be true'), {
      actual,
    })
  }
}

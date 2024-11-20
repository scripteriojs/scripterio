import { AssertionError } from '../errors/assertion.mjs'
import { indentLine } from '../utils/transform.mjs'
import { EOL } from 'os'

export const toBeEqual = (actual, expected) => {
  if (actual !== expected) {
    throw new AssertionError(
      indentLine('Expected: <expected>') +
        EOL +
        indentLine('Received: <actual>'),
      {
        actual,
        expected,
      }
    )
  }
}

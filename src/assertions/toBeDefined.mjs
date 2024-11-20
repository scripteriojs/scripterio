import { AssertionError } from '../errors/assertion.mjs'
import { indentLine } from '../utils/transform.mjs'

export const toBeDefined = (actual) => {
  if (actual === undefined) {
    throw new AssertionError(indentLine('Received: <actual>'), {
      actual,
    })
  }
}

import { AssertionError } from '../errors/assertion.mjs'
import { indentLine } from '../utils/transform.mjs'

export const toBeUndefined = (actual) => {
  if (actual !== undefined) {
    throw new AssertionError(indentLine('Received: <actual> to be undefined'), {
      actual,
    })
  }
}

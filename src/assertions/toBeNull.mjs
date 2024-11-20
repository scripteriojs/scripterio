import { AssertionError } from '../errors/assertion.mjs'
import { indentLine } from '../utils/transform.mjs'

export const toBeNull = (actual) => {
  if (actual !== null) {
    throw new AssertionError(indentLine('Received: <actual> to be null'), {
      actual,
    })
  }
}

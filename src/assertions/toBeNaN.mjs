import { AssertionError } from '../errors/assertion.mjs'
import { indentLine } from '../utils/transform.mjs'

export const toBeNaN = (actual) => {
  if (!isNaN(actual)) {
    throw new AssertionError(indentLine('Received: <actual> to be NaN'), {
      actual,
    })
  }
}

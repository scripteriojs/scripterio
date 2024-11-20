import { AssertionError } from '../errors/assertion.mjs'
import { indentLine } from '../utils/transform.mjs'

export const toBeNotNull = (actual) => {
  if (actual === null) {
    throw new AssertionError(indentLine('Received: <actual> to be not null'), {
      actual,
    })
  }
}

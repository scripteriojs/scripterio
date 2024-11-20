import { applyColor } from '../utils/transform.mjs'

export class AssertionError extends Error {
  // eslint-disable-next-line space-before-function-paren
  constructor(message, { actual, expected, source }) {
    super(
      applyColor(
        message
          .replace('<actual>', `<red>${actual}</red>`)
          .replace('<expected>', `<green>${expected}</green>`)
          .replace('<source>', `<bold>${source}</bold>`)
      )
    )
  }
}

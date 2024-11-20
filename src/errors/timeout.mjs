/* eslint-disable promise/param-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-promise-reject-errors */
import { EOL } from 'os'

export class TimeoutError extends Error {
  constructor(timeout) {
    super(
      'Runner error:' +
        EOL +
        `Exceeded timeout of ${timeout} ms for a test.` +
        EOL +
        'Use { timeout: 10_000} to increase the timeout value, if this is a long-running test.'
    )
    this.timeout = timeout
  }

  createTimeoutPromise() {
    return new Promise((_, reject) =>
      setTimeout(() => reject(this), this.timeout)
    )
  }
}

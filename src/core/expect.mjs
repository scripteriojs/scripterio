/* eslint-disable no-undef */
/* eslint-disable indent */
import { EOL } from 'os'
import { AssertionError } from '../errors/assertion.mjs'
import * as assertions from '../assertions/assertions.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { indentLine } from '../utils/transform.mjs'

const matcherHandler = (actual) => ({
  get:
    (_, name) =>
    (...args) => {
      try {
        assertions[name](actual, ...args)
      } catch (e) {
        if (e instanceof AssertionError || e instanceof RunnerError) {
          currentTest.errors.push(e)
        } else {
          throw new RunnerError(
            indentLine(`Unknown assertion: .${name}()`) +
              EOL +
              indentLine('List of available assertions:') +
              EOL +
              '' +
              EOL +
              `${Object.keys(assertions)
                .map((assertion) => indentLine(`.${assertion}()`))
                .join(EOL)}`
          )
        }
      }
    },
})

export const expect = (actual) => new Proxy({}, matcherHandler(actual))

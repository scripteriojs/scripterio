import * as core from './core/context.mjs'
import { expect as coreExpect } from './core/expect.mjs'

/**
 * Describe a "suite" with the given title and callback fn containing nested suites.
 *
 * ```js
 * describe('Unit tests for assertions', () => {
 *  test('Check assertion toBeDefined()', () => {
 *    const number = 1
 *    expect(number).toBeDefined()
 *  })
 * })
 * ```
 *
 * @param name Group title.
 * @param optionsOrBody (Optional) Object with options
 * @param callback A callback that is run immediately when calling describe(name, optionsOrBody, callback)
 */
export const describe = (name, optionsOrBody, body) =>
  core.describe(name, optionsOrBody, body)

/**
 * Test a specification or test-case with the given title, test options and callback fn.
 *
 * ```js
 * test('Check assertion toBeDefined()', () => {
 *    const number = 1
 *    expect(number).toBeDefined()
 * })
 * ```
 *
 * @param name Test title.
 * @param optionsOrBody (Optional) Object with options
 * @param callback A callback that is run immediately when calling test(name, optionsOrBody, callback)
 */
export const test = (name, optionsOrBody, body) =>
  core.test(name, optionsOrBody, body)

/**
 * Execute before each test case.
 *
 * ```js
 * beforeEach(() => {
 *  const number = 1
 * });
 * ```
 */
export const beforeEach = (body) => core.beforeEach(body)

/**
 * Execute before all test cases.
 *
 * ```js
 * beforeAll(() => {
 *  const number = 1
 * });
 * ```
 */
export const beforeAll = (body) => core.beforeAll(body)

/**
 * Execute after each test case.
 *
 * ```js
 * afterEach(() => {
 *  const number = 1
 * });
 * ```
 */
export const afterEach = (body) => core.afterEach(body)

/**
 * Execute after all test cases.
 *
 * ```js
 * afterAll(() => {
 *  const number = 1
 * });
 * ```
 */
export const afterAll = (body) => core.afterAll(body)

/**
 * @typedef {Object} Assertions
 * @property {Function} toBeDefined - Check that a variable is not undefined.
 * @property {Function} toBeUndefined - Check that a variable is undefined.
 * @property {Function} toBeEqual - Compare values for deep equality.
 * @property {Function} toBeNotEqual - Compare values for deep inequality.
 * @property {Function} toBeFalsy - Check that a variable is Falsy.
 * @property {Function} toBeTruthy - Check that a variable is Truthy.
 * @property {Function} toBeNull - Check that a variable is Null.
 * @property {Function} toBeNotNull - Check that a variable is not Null.
 * @property {Function} toHaveLength - Check that an object has a .length property and it matches a number.
 * @property {Function} toBeNaN - Check that a variable is NaN.
 * @property {Function} toBeGreaterThan - Compare two numbers (received > expected).
 * @property {Function} toBeLessThan - Compare two numbers (received < expected).
 * @property {Function} toContain - Check that an item is in an array or a string contains a substring.
 * @property {Function} toMatch - Check that a string matches a regular expression.
 */

/**
 * Expect gives you access to a number of "matchers" that let you validate different things.
 *
 * ```js
 *  expect(number).toBeDefined()
 * ```
 *
 * @param {any} value - the value to be tested.
 * @returns {Assertions} test functions that let you validate different things
 */
export const expect = (expected) => coreExpect(expected)

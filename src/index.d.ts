// Type definitions for scripterio

/**
 * Describe a "suite" with the given title and callback fn containing nested suites.
 *
 * **Usage**
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
export function describe(name: string, optionsOrBody: {}, body: {}): Options

/**
 * Test a specification or test-case with the given title, test options and callback fn.
 *
 * **Usage**
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
export function test(name: string, optionsOrBody: {}, body: {}): Options

type Options = {
  /**
   * Declares a skipped test group.
   * Tests in the skipped group are never run.
   * - `describe.skip(title)`
   * - `describe.skip(title, details, callback)`
   * - `test.skip(title, callback)`
   *
   * **Usage**
   *
   * ```js
   * describe.skip('skipped group', () => {
   *   test('example', () => {
   *     // This test will not run
   *   });
   * });
   * ```
   * or
   *
   *  * ```js
   * describe('example', () => {
   *   test.skip('skipped test', () => {
   *     // This test will not run
   *   });
   * });
   * ```
   *
   * @param name Test title.
   * @param optionsOrBody (Optional) Object with options
   * @param callback A callback that is run immediately when calling test(name, optionsOrBody, callback)
   */
  skip(name: string, optionsOrBody: {}, body: {}): void
}
/**
 * Execute before each test case.
 *
 * **Usage**
 *
 * ```js
 * beforeEach(() => {
 *  const number = 1
 * });
 * ```
 */
export function beforeEach(body: () => void): void

/**
 * Execute before all test cases.
 *
 * **Usage**
 *
 * ```js
 * beforeAll(() => {
 *  const number = 1
 * });
 * ```
 */
export function beforeAll(body: () => void): void

/**
 * Execute after each test case.
 *
 * **Usage**
 *
 * ```js
 * afterEach(() => {
 *  const number = 1
 * });
 * ```
 */
export function afterEach(body: () => void): void

/**
 * Execute after all test cases.
 *
 * **Usage**
 *
 * ```js
 * afterAll(() => {
 *  const number = 1
 * });
 * ```
 */
export function afterAll(body: () => void): void

type Assertions = {
  /**
   * Use .toBeDefined() to check that a variable is not undefined.
   *
   * **Usage**
   *
   * ```js
   *  expect(1).toBeDefined()
   * ```
   */
  toBeDefined: () => void

  /**
   * Use .toBeUndefined() to check that a variable is undefined.
   *
   * **Usage**
   *
   * ```js
   *  expect(undefined).toBeUndefined()
   * ```
   */
  toBeUndefined: () => void

  /**
   * Use .toBeEqual() to compare values are equal (also known as "deep" equality).
   *
   * **Usage**
   *
   * ```js
   *  expect('test').toBeEqual('test')
   * ```
   */
  toBeEqual: (expected: any) => void

  /**
   * Use .toBeNotEqual() to compare values are not equal (also known as "deep" equality).
   *
   * **Usage**
   *
   * ```js
   *  expect('real').toBeNotEqual('test')
   * ```
   */
  toBeNotEqual: (expected: any) => void

  /**
   * Use .toBeFalsy() to check that a variable is Falsy.
   *
   * **Usage**
   *
   * ```js
   *  expect(false).toBeFalsy()
   * ```
   */
  toBeFalsy: () => void

  /**
   * Use .toBeTruthy() to check that a variable is Truthy.
   *
   * **Usage**
   *
   * ```js
   *  expect(true).toBeTruthy()
   * ```
   */
  toBeTruthy: () => void

  /**
   * Use .toBeNull() to check that a variable is Null.
   *
   * **Usage**
   *
   * ```js
   *  expect(null).toBeNull()
   * ```
   */
  toBeNull: () => void

  /**
   * Use .toBeNotNull() to check that a variable is not Null.
   *
   * **Usage**
   *
   * ```js
   *  expect(1).toBeNotNull()
   * ```
   */
  toBeNotNull: () => void

  /**
   * Use .toHaveLength() to check that an object has a .length property and it is set to a certain numeric value.
   *
   * **Usage**
   *
   * ```js
   *  expect([1, 2, 3]).toHaveLength(3)
   * ```
   */
  toHaveLength: (expected: number) => void

  /**
   * Use .toBeNaN() to check that a variable is NaN.
   *
   * **Usage**
   *
   * ```js
   *  expect('text').toBeNaN()
   * ```
   */
  toBeNaN: () => void

  /**
   * Use .toBeGreaterThan() to compare received > expected for number or big integer values.
   *
   * **Usage**
   *
   * ```js
   *  expect(5).toBeGreaterThan(4)
   * ```
   */
  toBeGreaterThan: (expected: number) => void

  /**
   * Use .toBeLessThan() to compare received < expected for number or big integer values.
   *
   * **Usage**
   *
   * ```js
   *  expect(3).toBeLessThan(4)
   * ```
   */
  toBeLessThan: (expected: number) => void

  /**
   * Use .toContain() when you want to check that an item is in an array or a string.
   *
   * **Usage**
   *
   * ```js
   *  expect('test').toContain('st')
   *  expect(['test', 'real']).toContain('real')
   *
   * ```
   */
  toContain: (expected: any) => void

  /**
   * Use .toMatch() to check that a string matches a regular expression.
   *
   * **Usage**
   *
   * ```js
   *  expect('test').toMatch('st')
   *  expect(['test', 'real']).toMatch('real')
   *
   * ```
   */
  toMatch: (expected: any) => void
}

/**
 * Expect gives you access to a number of "matchers" that let you validate different things.
 *
 * **Usage**
 *
 * ```js
 *  expect(number).toBeDefined()
 * ```
 *
 * @param expected Expected value to check.
 */
export function expect(expected: any): Assertions

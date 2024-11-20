import { EOL } from 'os'

export class RunnerError extends Error {
  // eslint-disable-next-line space-before-function-paren, no-useless-constructor
  constructor(message) {
    super('Runner error:' + EOL + message)
  }
}

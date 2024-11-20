import { EOL } from 'os'
import { ARGS } from './constants.mjs'
import { applyColor } from '../utils/transform.mjs'

export const printHelp = () => {
  console.log(
    'Available options: ' +
      EOL +
      '' +
      EOL +
      `${ARGS.FILE}        <path>  ${'Path to your test file'}` +
      EOL +
      `${ARGS.FOLDER}      <path>  ${'Path to your tests folder'}` +
      EOL +
      '' +
      EOL +
      `${ARGS.HELP}                 ${'Display help for command'}` +
      EOL +
      ''
  )
  process.exit(1)
}

export const printError = (arg) => {
  console.error(
    applyColor(`<red>Error: unknown option: ${arg.replace(/=.*$/, '=')}</red>`)
  )
  console.error('Usage: npx real-test-js <option>' + EOL)
  printHelp()
}

export const printSkippedMsg = (name) =>
  console.log(applyColor(`<cyan>Skipped test:</cyan> ${name}`))

export const printExecutionTime = (start, end) => {
  console.log(`Time:  ${end - start} ms`)
}

export const printRunningTestFile = (testFile) => {
  console.log(`Running test file: ${testFile}`)
}

export const printNewLine = () => console.log('')

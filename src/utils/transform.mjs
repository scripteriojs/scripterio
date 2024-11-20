/* eslint-disable n/handle-callback-err */
import { ANSI_COLORS, ANSI_RESET } from '../core/constants.mjs'
import path from 'path'
import fs from 'fs'
import { EOL } from 'os'
import { AssertionError } from '../errors/assertion.mjs'
import { RunnerError } from '../errors/runner.mjs'
import { TimeoutError } from '../errors/timeout.mjs'

export const applyColor = (message) =>
  Object.keys(ANSI_COLORS).reduce(
    (message, color) =>
      message
        .replace(new RegExp(`<${color}>`, 'g'), ANSI_COLORS[color])
        .replace(new RegExp(`</${color}>`, 'g'), ANSI_RESET),
    message
  )

export const last = (arr) => arr[arr.length - 1]

export const withoutLast = (arr) => arr.slice(0, -1)

export const executeAllAndWait = async (fnArray) => {
  for (const fn of fnArray) {
    const result = fn()
    if (result instanceof Promise) {
      await Promise.race([result])
    }
  }
}

const ignoredFilePatterns = [
  '/node_modules/',
  path.dirname(new URL(import.meta.url).pathname),
  '^internal/',
]

const findFailureCallSite = (stack) =>
  stack.find((callSite) => {
    const fileName = callSite.getFileName()
    return (
      fileName &&
      !ignoredFilePatterns.some((pattern) => fileName.match(pattern))
    )
  })

const relative = (fileUrl) =>
  path.relative(process.cwd(), fileUrl.replace('file://', ''))

const getFailureLocation = (stack) => {
  const failureLocation = findFailureCallSite(stack)
  if (failureLocation) {
    return {
      fileName: relative(failureLocation.getFileName()),
      lineNumber: failureLocation.getLineNumber(),
      column: failureLocation.getColumnNumber(),
    }
  }
}

const pipeSeparatedValues = (...columns) => columns.join(' | ')

const withLineNumbers = (lines, start) => {
  const numberColumnWidth = (lines.length + start).toString().length

  return lines.map((line, index) => {
    const number = (start + index).toString().padStart(numberColumnWidth)
    return pipeSeparatedValues(number, line)
  })
}

const pointerAt = (column, maxLineNumber) => {
  const padding = maxLineNumber.toString().length

  return pipeSeparatedValues(
    ' '.repeat(padding),
    `${' '.repeat(column - 1)}<bold>^</bold>`
  )
}

const boundedSlice = (array, from, to) =>
  array.slice(Math.max(from, 0), Math.min(to, array.length - 1))

const highlightedSource = ({ fileName, lineNumber, column }) => {
  const allLines = fs.readFileSync(fileName, { encoding: 'utf8' }).split(EOL)

  const fromLine = lineNumber - 3
  const toLine = lineNumber + 2

  const highlightedLines = withLineNumbers(
    boundedSlice(allLines, fromLine, toLine),
    fromLine + 1
  )

  return [
    ...highlightedLines.slice(0, 3),
    pointerAt(column, toLine),
    ...highlightedLines.slice(3, 5),
  ]
}

export const indentLine = (line) => `  ${line}`

export const transformStackTrace = (error, stack) => {
  const failureLocation = getFailureLocation(stack)
  if (!failureLocation) return
  if (
    error instanceof AssertionError ||
    error instanceof RunnerError ||
    error instanceof TimeoutError
  ) {
    const { fileName } = failureLocation
    const introLine = `in <bold>${fileName}</bold>:`
    const allLines = ['', introLine, '', ...highlightedSource(failureLocation)]
    return applyColor(allLines.map(indentLine).join(EOL))
  } else {
    return error.stack
  }
}

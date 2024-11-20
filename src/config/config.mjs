/* eslint-disable space-before-function-paren */
import { EOL } from 'os'
import { getFileNameFromArgs, getFolderNameFromArgs } from '../core/cli.mjs'
import { printHelp } from '../core/output.mjs'
import { applyColor } from '../utils/transform.mjs'

const file = getFileNameFromArgs()
const folder = getFolderNameFromArgs()

const config = {
  file,
  folder,
}

export const getConfig = () => {
  return config
}

export const checkConfig = () => {
  if (config.file === '' && config.folder === '') {
    console.error(
      applyColor(
        '<bold><red>Missing "file" or "folder" path arguments to your test(s)</red></bold>'
      ) + EOL
    )
    printHelp()
  }
}

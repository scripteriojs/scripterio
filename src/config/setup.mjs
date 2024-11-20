import path from 'path'
import fs from 'fs'

const getAllFilePaths = (dir) => {
  const fileNames = fs.readdirSync(dir)
  let filePaths = []
  fileNames.forEach((fileName) => {
    const filePath = path.join(dir, fileName)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      filePaths = filePaths.concat(getAllFilePaths(filePath))
    } else if (fileName.endsWith('.js')) {
      filePaths.push(filePath)
    }
  })
  return filePaths
}

export const getMultipleFilePath = (fileDir) => {
  return getAllFilePaths(fileDir)
}

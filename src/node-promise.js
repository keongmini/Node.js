// @ts-check

const fs = require('fs')

// 1
/**
 * @param {string} fileName
 */
function readeFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, value) => {
      if (error) {
        reject(error)
      }
      resolve(value)
    })
  })
}
readeFileInPromise('.gitignore').then((value) => console.log(value))

// 2
fs.promises.readFile('.gitignore', 'utf-8').then((value) => console.log(value))

// 3
async function main() {
  try {
    const result = await fs.promises.readFile('.gitignore', 'utf-8')
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

main()

// 모두 동일한 코드

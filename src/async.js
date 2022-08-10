/**
 * @param {number} duration
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, duration)
  })
}

async function main() {
  await sleep(1000)
  await sleep(1000)
  await sleep(1000)
}

main()

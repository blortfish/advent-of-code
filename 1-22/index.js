import * as dotenv from 'dotenv'
import fetchData from '../modules/fetchData.js'

(async () => {
  dotenv.config()
  const data = await fetchData(1)

  const input = data.split('\n').map(i => parseInt(i, 10))
  let currentCount = 0
  const [firstElf, secondElf, thirdElf] = input.reduce((acc, curr) => {
    if (curr) {
      currentCount += curr
    } else {
      acc.push(currentCount)
      currentCount = 0
    }
    return acc
  }, []).sort((a, b) => b - a)

  console.log(`firstElf: ${firstElf}, secondElf: ${secondElf}, thirdElf: ${thirdElf}`)
  console.log(`top three sum ${firstElf + secondElf + thirdElf}`)
})()
import * as dotenv from 'dotenv'
import fetchData from '../modules/fetchData.js'

const shapeValues = {
  'A': 1,
  'X': 1,
  'B': 2,
  'Y': 2,
  'C': 3,
  'Z': 3
};

(async () => {
  dotenv.config()
  const data = await fetchData(2)
  let totalScore = 0
  data.split('\n').map(rpsMatch => {
    if (!rpsMatch) return
    const [ opponentMove, myMove ] = rpsMatch.split(' ')
    const gameResult = shapeValues[myMove] - shapeValues[opponentMove]
    let matchScore = shapeValues[myMove]
    matchScore += gameResult === 0 ? 3 : 0
    matchScore += gameResult > 0 ? 6 : 0
    totalScore += matchScore
    console.log(`${opponentMove} ${myMove} ${gameResult} score: ${matchScore}`)
  })
  console.log({ totalScore })
})()
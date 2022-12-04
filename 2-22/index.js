const shapes = {
  'A': { value: 1, beats: 'Z', losesTo: 'Y' }, // Rock
  'X': { value: 1, beats: 'C', losesTo: 'B' },
  'B': { value: 2, beats: 'X', losesTo: 'Z' }, // Paper
  'Y': { value: 2, beats: 'A', losesTo: 'C' },
  'C': { value: 3, beats: 'Y', losesTo: 'X' }, // Scissors
  'Z': { value: 3, beats: 'B', losesTo: 'A' }
}

export default async function (data) {
  const input = await data
  console.log(`Part 1 total score: ${part1(input)}`)
  console.log(`Part 2 total score: ${part2(input)}`)
}

const part1 = input => input.split('\n').reduce((acc, rpsMatch) => {
  if (!rpsMatch) return acc
  const [ opponentMove, myMove ] = rpsMatch.split(' ')
  const draw = shapes[myMove].value === shapes[opponentMove].value
  const wonMatch = !draw && shapes[opponentMove].beats !== myMove
  return acc + shapes[myMove].value + (draw ? 3 : wonMatch ? 6 : 0)
}, 0)

const part2 = input => input.split('\n').reduce((acc, rpsMatch) => {
  if (!rpsMatch) return acc
  const [ opponentMove, myAction ] = rpsMatch.split(' ')
  switch (myAction) {
    case 'X': // X means you need to lose
      return acc += shapes[shapes[opponentMove].beats].value
    case 'Y': // Y means you need to end the round in a draw
      return acc += 3 + shapes[opponentMove].value
    default: // Z means you need to win.
      return acc += 6 + shapes[shapes[opponentMove].losesTo].value
  }
}, 0)

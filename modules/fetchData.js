import fetch from 'node-fetch'
export default  async function (day) {
  const { SESSION_COOKIE } = process.env
  return (await fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    'headers': {
      'cookie': `session=${SESSION_COOKIE}`
    },
    'body': null,
    'method': 'GET'
  })).text()
}
import * as dotenv from 'dotenv'

dotenv.config()
const [ , , day ] = process.argv
import fetchData from './modules/fetchData.js'

day
  ? (await import(`./${day}-22/index.js`)).default(fetchData(day))
  : console.log('please pass a day param: "npm run {{day}}"')

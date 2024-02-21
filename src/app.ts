import puppeteer from 'puppeteer'
import colors from 'colors'
import * as constants from './constants.js'
import { generateNumber, sleep } from './utils.js'

const browser = await puppeteer.launch({ headless: false })

const page = await browser.newPage()
page.setDefaultNavigationTimeout(0)
await page.setUserAgent(constants.USER_AGENT)

for (let i = 0; i < constants.PARTICIPANTS_COUNT; i++) {
  await sleep(3000)
  await answerQuestions(page)
  console.clear()
  console.log(colors.green(`${i}/${constants.PARTICIPANTS_COUNT}`))
}

await browser.close()

async function answerQuestions(page: puppeteer.Page): Promise<void> {
  await page.goto(constants.URL)
  await page.waitForSelector('div[role="heading"]')

  // Get all questions
  const questions = await page.$$('div[role="listitem"]')

  for (let i = 0; i < questions.length; i++) {
    const options = await questions[i].$$('div[role="radio"]')
    const optionMap = constants.QUESTIONS_MAP[i]

    let option = generateNumber(3, optionMap.value, optionMap.probability)
    if (i === 0) {
      option = generateNumber(1, optionMap.value, optionMap.probability)
    }
    await options[option].click()
  }

  const sendAnswersButton = await page.waitForSelector('div[role="button"]')
  await sendAnswersButton?.click()
}

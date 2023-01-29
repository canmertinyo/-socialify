import puppeteer from 'puppeteer'

async function bootstrap(): Promise<void> {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.microsoft.com/en/microsoft-teams/log-in')

  await page.click('.btn btn-outline-primary-white   ')

  await browser.close()

  console.log('hey')
}

bootstrap()

import { chromium } from "playwright";
const pin: string = '100000';
(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://kahoot.it/')

  await page.setViewportSize({ width: 1504, height: 860 })

  await page.fill('.vertical-alignment__VerticalAlignment-sc-1nwafmh-0 #game-input', pin)
  var timestampParams: Array<Number> = [
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDay(),
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds()
  ]
  var timestamp = timestampParams.join('-')
  await page.screenshot({ path: `./img/${timestamp}.png` });
  await page.click('.vertical-alignment__VerticalAlignment-sc-1nwafmh-0 > .vertical-alignment__VerticalAlignmentCenter-sc-1nwafmh-1 > .game-id__FormWrapper-sc-1enferg-0 > .enter-pin-form__Form-z047z0-0 > .button__Button-c6mvr2-0')

  await browser.close()
})()
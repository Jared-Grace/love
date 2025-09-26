import { log } from "./log.mjs";
import { integer_random } from "./integer_random.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
import { marker } from "./marker.mjs";
export async function messenger_reply() {
  marker("1");
  let characters_per_minute = 190;
  let seconds_per_minute = 60;
  let ms_per_second = 1000;
  let ms_per_minute = seconds_per_minute * ms_per_second;
  let ms_per_character = ms_per_minute / characters_per_minute;
  let high = ms_per_character * 1.5;
  let r = integer_random(ms_per_character, high);
  log(message);
  return;
  const puppeteerModule = await import("puppeteer");
  const puppeteer = puppeteerModule.default ?? puppeteerModule;
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
  });
  const page = await browser.newPage();
  await page.goto("https://www.facebook.com/messages/e2ee/t/9895223143834311");
  const unreadSpanSelector = 'p[dir="auto"]';
  let p = await page.waitForSelector(unreadSpanSelector, {
    timeout: 10000,
  });
  await p.focus();
  await page.keyboard.type("Greetings!");
  await page.keyboard.press("Enter");
}

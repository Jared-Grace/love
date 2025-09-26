import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
export async function messenger_reply_puppeteer() {
  const puppeteerModule = await import("puppeteer");
  const puppeteer = puppeteerModule.default ?? puppeteerModule;
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
  });
  const page = await browser.newPage();
  let v = messenger_reply_url();
  await page.goto(v);
  const unreadSpanSelector = 'p[dir="auto"]';
  let p = await page.waitForSelector(unreadSpanSelector, {
    timeout: 10000,
  });
  await p.focus();
  await keyboard_type_delay("Greetings!", page.keyboard.type);
  return;
  await page.keyboard.press("Enter");
}

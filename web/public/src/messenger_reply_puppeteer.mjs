import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { each_async } from "./each_async.mjs";
import { sleep } from "./sleep.mjs";
import { keyboard_typing_delay } from "./keyboard_typing_delay.mjs";
import { string_list_to } from "./string_list_to.mjs";
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
  const message = "Greetings!";
  let fn = page.keyboard.type;
  let list = string_list_to(message);
  async function lambda(item) {
    let delay_ms = keyboard_typing_delay();
    await sleep(delay_ms);
    await fn(item);
  }
  await each_async(list, lambda);
  return;
  await page.keyboard.press("Enter");
}

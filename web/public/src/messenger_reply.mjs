import { each_async } from "./each_async.mjs";
import { string_list_to } from "./string_list_to.mjs";
import { keyboard_typing_delay } from "./keyboard_typing_delay.mjs";
import { log } from "./log.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
import { marker } from "./marker.mjs";
const message = "Greetings!";
export async function messenger_reply() {
  marker("1");
  let r = keyboard_typing_delay();
  log(r);
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
  let list = string_list_to(str);
  async function lambda(item) {}
  await each_async(list2, lambda);
  await page.keyboard.type(message);
  await page.keyboard.press("Enter");
}

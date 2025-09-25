import { sleep } from "./sleep.mjs";
import { log } from "./log.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
import { marker } from "./marker.mjs";
export async function messenger_reply() {
  marker("1");
  const puppeteerModule = await import("puppeteer");
  const puppeteer = puppeteerModule.default ?? puppeteerModule;
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  const unreadSpanSelector = '//span[@name="q"]';
  await page.waitForSelector(unreadSpanSelector, {
    timeout: 1000000,
  });
  const [span] = await page.$x(unreadSpanSelector);
  if (span) {
    console.log("Found unread span!");
    console.log(span);
  } else {
    console.log("Unread span not found");
  }
  await sleep(100000);
  await page.goto("https://www.facebook.com/messages/e2ee/t/");
}

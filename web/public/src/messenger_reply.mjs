import { sleep } from "./sleep.mjs";
import { log } from "./log.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
import { import_install } from "./import_install.mjs";
import { marker } from "./marker.mjs";
export async function messenger_reply() {
  marker("1");
  const puppeteer = await import_install("puppeteer");
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
  });
  const page = await browser.newPage();
  log({
    page,
  });
  await page.goto("https://www.facebook.com/messages/e2ee/t/");
  await page.waitForTimeout(10000);
  const [span] = await page.$x("//span[contains(text(), 'unread')]");
  if (span) {
    console.log("Found unread span!");
    await span.click();
  } else {
    console.log("Unread span not found");
  }
  await sleep(100000);
}

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
  await page.goto("https://www.facebook.com/messages/e2ee/t/9895223143834311");
  const inputBox = await page.waitForSelector(
    'div[aria-label="Press Enter to send"]',
    {
      timeout: 10000,
    },
  );
  await inputBox.focus();
  await page.keyboard.type("Hello world!");
  await page.keyboard.press("Enter");
}

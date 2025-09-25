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
  await page.goto("https://www.facebook.com/");
}

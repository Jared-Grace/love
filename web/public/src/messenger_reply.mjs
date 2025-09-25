import { marker } from "./marker.mjs";
export async function messenger_reply() {
  marker("1");
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir:
      "C:\\Users\\YourName\\AppData\\Local\\Google\\Chrome\\User Data\\Default",
  });
  const page = await browser.newPage();
  await page.goto("https://www.facebook.com/");
}

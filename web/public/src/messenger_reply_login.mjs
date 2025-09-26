import { command_line_read } from "./command_line_read.mjs";
import { import_install } from "./import_install.mjs";
export async function messenger_reply_login() {
  const { chromium, firefox, webkit } = await import_install("playwright");
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/");
  let v = await command_line_read(prompt);
  await context.storageState({
    path: "fb-session.json",
  });
  await browser.close();
}

import { messenger_reply_url } from "../../../love/public/src/messenger_reply_url.mjs";
import { command_line_read_empty } from "../../../love/public/src/command_line_read_empty.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function messenger_reply_login() {
  const { chromium, firefox, webkit } = await import_install("playwright");
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  let v = messenger_reply_url();
  await page.goto(v);
  await command_line_read_empty();
  await context.storageState({
    path: "fb-session.json",
  });
  await browser.close();
}

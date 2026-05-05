import { playwright_chromium } from "../../../love/public/src/playwright_chromium.mjs";
import { messenger_reply_url } from "../../../love/public/src/messenger_reply_url.mjs";
import { command_line_read_empty } from "../../../love/public/src/command_line_read_empty.mjs";
export async function messenger_reply_login() {
  "TODO: ";
  let chromium = await playwright_chromium();
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

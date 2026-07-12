import { playwright_session_save_facebook } from "./playwright_session_save_facebook.mjs";
import { playwright_chromium } from "./playwright_chromium.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { text_combine } from "./text_combine.mjs";
export async function messenger_reply_login() {
  text_combine("TODO: use this instead: ", playwright_session_save_facebook);
  let chromium = await playwright_chromium();
  let browser = await chromium.launch({
    headless: false,
  });
  let context = await browser.newContext();
  let page = await context.newPage();
  let v = messenger_reply_url();
  await page.goto(v);
  await command_line_read_empty();
  await context.storageState({
    path: "fb-session.json",
  });
  await browser.close();
}

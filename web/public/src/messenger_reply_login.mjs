import { playwright_session_save_facebook } from "../../../love/public/src/playwright_session_save_facebook.mjs";
import { playwright_chromium } from "../../../love/public/src/playwright_chromium.mjs";
import { messenger_reply_url } from "../../../love/public/src/messenger_reply_url.mjs";
import { command_line_read_empty } from "../../../love/public/src/command_line_read_empty.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
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

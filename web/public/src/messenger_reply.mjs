import { emoji_question } from "./emoji_question.mjs";
import { assert } from "./assert.mjs";
import { log } from "./log.mjs";
import { bind_property } from "./bind_property.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { retry_on_error } from "./retry_on_error.mjs";
import { import_install } from "./import_install.mjs";
export async function messenger_reply() {
  let p = folder_user_docs_path("fb.json");
  let data = await file_read_json(p);
  let pin = object_property_get(data, "pin");
  const { chromium, firefox, webkit } = await import_install("playwright");
  let browser = null;
  async function lambda2() {
    browser = await chromium.launch({
      headless: false,
    });
  }
  const command = "npx playwright install";
  await retry_on_error(command, lambda2, command);
  const context = await browser.newContext({
    storageState: "fb-session.json",
  });
  const page = await context.newPage();
  let v = messenger_reply_url();
  await page.goto(v);
  const input = await page.waitForSelector(
    "#mw-numeric-code-input-prevent-composer-focus-steal",
  );
  await input.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay(pin, fn);
  const locator = page.locator("text=Unread");
  const count = await locator.count();
  let v2 = emoji_question();
  assert(b);
  console.log(`Found ${count} matches`);
  if (false) {
    await locator.nth(i).click();
  }
  await command_line_read_empty();
  await browser.close();
}

import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { log } from "./log.mjs";
import { bind_property } from "./bind_property.mjs";
import { property_get } from "./property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { retry_on_error } from "./retry_on_error.mjs";
import { import_install } from "./import_install.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function messenger_reply_playwright() {
  let p = folder_user_docs_path("fb.json");
  let data = await file_read_json(p);
  let pin = property_get(data, "pin");
  let v2 = await import_install("playwright");
  let webkit = property_get(v2, "webkit");
  let firefox = property_get(v2, "firefox");
  let chromium = property_get(v2, "chromium");
  let browser = null;
  async function lambda() {
    browser = await chromium.launch({
      headless: false,
    });
  }
  let command = "npx playwright install";
  await retry_on_error(command, lambda, command);
  let context = await browser.newContext({
    storageState: "fb-session.json",
  });
  let page = await context.newPage();
  let v = messenger_reply_url();
  await page.goto(v);
  let input = await page.waitForSelector(
    "#mw-numeric-code-input-prevent-composer-focus-steal",
  );
  await input.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay(pin, fn);
  let locator = page.locator("text=Unread");
  let count = await locator.count();
  let b = equal(count, 4);
  assert(b);
  console.log(text_combine_multiple(["Found ", count, " matches"]));
  await locator.nth(0).click();
  if (false) {
  }
  await command_line_read_empty();
  await browser.close();
}

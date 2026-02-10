import { equal } from "../../../love/public/src/equal.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { bind_property } from "../../../love/public/src/bind_property.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
import { keyboard_type_delay } from "../../../love/public/src/keyboard_type_delay.mjs";
import { command_line_read_empty } from "../../../love/public/src/command_line_read_empty.mjs";
import { messenger_reply_url } from "../../../love/public/src/messenger_reply_url.mjs";
import { retry_on_error } from "../../../love/public/src/retry_on_error.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function messenger_reply_playwright() {
  let p = folder_user_docs_path("fb.json");
  let data = await file_read_json(p);
  let pin = property_get(data, "pin");
  const v2 = await import_install("playwright");
  let webkit = property_get(v2, "webkit");
  let firefox = property_get(v2, "firefox");
  let chromium = property_get(v2, "chromium");
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
  let b = equal(count, 4);
  assert(b);
  console.log(`Found ${count} matches`);
  await locator.nth(0).click();
  if (false) {
  }
  await command_line_read_empty();
  await browser.close();
}

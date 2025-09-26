import { file_read_json } from "./file_read_json.mjs";
import { bind } from "./bind.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { retry_on_error } from "./retry_on_error.mjs";
import { import_install } from "./import_install.mjs";
export async function messenger_reply() {
  let p = folder_user_docs_path("fb.json");
  let data = await file_read_json(file_path);
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
  let fn = page.keyboard.type.bind(page.keyboard);
  await keyboard_type_delay("123", fn);
  await command_line_read_empty();
  await browser.close();
}

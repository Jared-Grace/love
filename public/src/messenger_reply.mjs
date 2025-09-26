import { each_async } from "./each_async.mjs";
import { sleep } from "./sleep.mjs";
import { keyboard_typing_delay } from "./keyboard_typing_delay.mjs";
import { string_list_to } from "./string_list_to.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { retry_on_error } from "./retry_on_error.mjs";
import { import_install } from "./import_install.mjs";
export async function messenger_reply() {
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
  let list = string_list_to("1");
  async function lambda(item) {
    let delay_ms = keyboard_typing_delay();
    await sleep(delay_ms);
    await page.keyboard.type(item);
  }
  await each_async(list, lambda);
  await command_line_read_empty();
  await browser.close();
}

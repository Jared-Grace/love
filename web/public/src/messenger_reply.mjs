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
  await command_line_read_empty();
  await browser.close();
}

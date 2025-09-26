import { command_line_log } from "./command_line_log.mjs";
import { log } from "./log.mjs";
import { catch_only_run_async } from "./catch_only_run_async.mjs";
import { import_install } from "./import_install.mjs";
export async function messenger_reply() {
  const { chromium, firefox, webkit } = await import_install("playwright");
  let browser = null;
  async function lambda2() {
    browser = await chromium.launch({
      headless: false,
    });
  }
  let error_text = "npx playwright install";
  async function lambda() {
    let stdout = await command_line_log(error_text);
    log(stdout);
    await lambda2();
  }
  await catch_only_run_async(lambda2, command, lambda);
  const page = await browser.newPage();
  await page.goto("https://facebook.com");
  await browser.close();
}

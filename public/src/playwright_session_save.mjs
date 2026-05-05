import { playwright_chromium_visible } from "../../../love/public/src/playwright_chromium_visible.mjs";
import { command_line_read } from "../../../love/public/src/command_line_read.mjs";
import { folder_secret_join_json } from "../../../love/public/src/folder_secret_join_json.mjs";
export async function playwright_session_save(url, session_name) {
  const browser = await playwright_chromium_visible();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  let answer = await command_line_read(
    "Press enter to save sesssion and close the browser",
  );
  let path = folder_secret_join_json(session_name);
  await context.storageState({
    path,
  });
  await browser.close();
}

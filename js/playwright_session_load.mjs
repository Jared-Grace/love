import { folder_secret_join_json } from "./folder_secret_join_json.mjs";
import { playwright_chromium_visible } from "./playwright_chromium_visible.mjs";
export async function playwright_session_load(session_name) {
  let browser = await playwright_chromium_visible();
  let path = folder_secret_join_json(session_name);
  let context = await browser.newContext({
    storageState: path,
  });
  let page = await context.newPage();
  let r = {
    page,
    context,
    browser,
  };
  return r;
}

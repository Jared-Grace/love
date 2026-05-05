import { folder_secret_join_json } from "../../../love/public/src/folder_secret_join_json.mjs";
export async function playwright_session_save() {
  const session_name = "fb-session";
  const url = "https://www.facebook.com/login";
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  await new Promise(function lambda(resolve) {
    let r = process.stdin.once("data", resolve);
    return r;
  });
  let path = folder_secret_join_json(session_name);
  await context.storageState({
    path,
  });
  await browser.close();
}

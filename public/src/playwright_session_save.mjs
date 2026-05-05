import { app_calendar } from "../../../love/public/src/app_calendar.mjs";
import { folder_secret_join_json } from "../../../love/public/src/folder_secret_join_json.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function playwright_session_save() {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/login");
  console.log("👉 Log in manually, then press ENTER here...");
  await new Promise(function lambda(resolve) {
    let r = process.stdin.once("data", resolve);
    return r;
  });
  let file_path = folder_secret_join_json(app_calendar.name);
  await context.storageState({
    path: "fb-session.json",
  });
  console.log("✅ Session saved to fb-session.json");
  await browser.close();
}

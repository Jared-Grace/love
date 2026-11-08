import { mkdirSync } from "node:fs";
import { app_learn_js_screen_name_short } from "./app_learn_js_screen_name_short.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_learn_js_lesson_hash_key } from "./app_learn_js_lesson_hash_key.mjs";
import { app_shared_screen_hash_key } from "./app_shared_screen_hash_key.mjs";
import { app_learn_js_milestone_hash_key } from "./app_learn_js_milestone_hash_key.mjs";
import { page_capture_settle_ms } from "./page_capture_settle_ms.mjs";
import { app_learn_js_screens_seed_script } from "./app_learn_js_screens_seed_script.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function app_learn_js_milestone_screen_screenshot(id) {
  "$plain id";
  "Opens one milestone of the code app on the dev build at phone width, as fresh as a learner who has not started it, and saves a picture of its first question, returning the picture's path, the words on the page and any error the page threw.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let folder = "gitignore/app_code_lesson_screens";
  mkdirSync(folder, {
    recursive: true,
  });
  let screen = app_learn_js_screen_name_short(fn_name("app_learn_js_review"));
  let url =
    "http://localhost:8080/dev/learn_js.html#" +
    app_learn_js_lesson_hash_key() +
    "=while_decrement," +
    app_shared_screen_hash_key() +
    "=" +
    screen +
    "," +
    app_learn_js_milestone_hash_key() +
    "=" +
    id;
  let settle = page_capture_settle_ms();
  let errors = [];
  let path = folder + "/" + id + ".png";
  let text = "";
  async function on_page(page) {
    function on_error(e) {
      let v = String(e);
      errors.push(v);
    }
    page.on("pageerror", on_error);
    let script = app_learn_js_screens_seed_script();
    await page.addInitScript(script);
    await page.setViewportSize({
      width: 400,
      height: 800,
    });
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(settle);
    await page.screenshot({
      path,
      fullPage: true,
    });
    text = await page.evaluate("document.body.innerText");
  }
  await playwright_test_blank(on_page);
  let r = {
    url,
    path,
    text,
    errors,
  };
  return r;
}

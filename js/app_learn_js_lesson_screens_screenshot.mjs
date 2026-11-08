import { mkdirSync } from "node:fs";
import { app_learn_js_lesson_hash_key } from "./app_learn_js_lesson_hash_key.mjs";
import { app_shared_screen_hash_key } from "./app_shared_screen_hash_key.mjs";
import { app_code_screen_name_short } from "./app_code_screen_name_short.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_learn_js_quiz_hash_key } from "./app_learn_js_quiz_hash_key.mjs";
import { page_capture_settle_ms } from "./page_capture_settle_ms.mjs";
import { app_code_screen_next_click_script } from "./app_code_screen_next_click_script.mjs";
import { app_code_screens_seed_script } from "./app_code_screens_seed_script.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function app_learn_js_lesson_screens_screenshot(id) {
  "$plain id";
  "Opens one lesson of the code app on the dev build at phone width, the way a learner meets it, and saves a picture of its examples screen and of each quiz kind, clicking Next between them. Answers the pictures saved, the words on each, and any error the page threw. id is the lesson's short id, as a link spells it.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let folder = "gitignore/app_code_lesson_screens";
  mkdirSync(folder, {
    recursive: true,
  });
  let prefix = "http://localhost:8080/dev/code.html";
  let lesson = app_learn_js_lesson_hash_key() + "=" + id;
  let screen = app_shared_screen_hash_key() + "=";
  let examples = app_code_screen_name_short(fn_name("app_learn_js_examples"));
  let quiz = app_code_screen_name_short(fn_name("app_code_quiz"));
  let quiz_part = lesson + "," + screen + quiz;
  let examples_url = prefix + "#" + lesson + "," + screen + examples;
  let quiz_url =
    prefix + "#" + quiz_part + "," + app_learn_js_quiz_hash_key() + "=0";
  let settle = page_capture_settle_ms();
  let next_script = app_code_screen_next_click_script();
  let pictures = [];
  let errors = [];
  async function on_page(page) {
    function on_error(e) {
      let v = String(e);
      errors.push(v);
    }
    page.on("pageerror", on_error);
    let script = app_code_screens_seed_script();
    await page.addInitScript(script);
    await page.setViewportSize({
      width: 400,
      height: 800,
    });
    async function picture(name) {
      await page.waitForTimeout(settle);
      let path = folder + "/" + id + "_" + name + ".png";
      await page.screenshot({
        path,
        fullPage: true,
      });
      let text = await page.evaluate("document.body.innerText");
      pictures.push({
        path,
        text,
      });
    }
    await page.goto(examples_url);
    await page.waitForLoadState("networkidle");
    await picture("examples");
    await page.goto("about:blank");
    await page.goto(quiz_url);
    await page.waitForLoadState("networkidle");
    await picture("quiz_0");
    for (let kind = 1; kind < 8; kind++) {
      let clicked = await page.evaluate(next_script);
      if (!clicked) {
        break;
      }
      await page.waitForTimeout(settle);
      if (!page.url().includes(quiz_part)) {
        break;
      }
      await picture("quiz_" + kind);
    }
  }
  await playwright_test_blank(on_page);
  let r = {
    pictures,
    errors,
  };
  return r;
}

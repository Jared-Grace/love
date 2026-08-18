import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { app_code_screen_capture } from "./app_code_screen_capture.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_screen_text_normalize } from "./app_code_screen_text_normalize.mjs";
import { app_code_screen_next_click_script } from "./app_code_screen_next_click_script.mjs";
import { equal_not } from "./equal_not.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_code_reload_persists_test_on_page(
  page,
  url_prefix,
  results,
  lesson_ids,
) {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  arguments_assert(arguments, 4);
  async function check(id) {
    "the three words this address stands on are frozen, so each is read off the function holding it rather than spelled into the joined-up text - a word fused into a separator is invisible to everything that watches for a wording change";
    let v = app_code_screen_hash_key();
    let f_name = fn_name("app_code_quiz");
    let v2 = app_code_quiz_hash_key();
    let combined = text_combine_multiple([",", v, "=", f_name, ",", v2, "=0"]);
    let v3 = app_code_lesson_hash_key();
    let url = text_combine_multiple([
      url_prefix,
      "?s=",
      id,
      "_r#",
      v3,
      "=",
      id,
      combined,
    ]);
    await page.goto(url);
    await page.waitForTimeout(180);
    let first = await app_code_screen_capture(page);
    let text = property_get(first, "text");
    let kind0 = app_code_screen_text_normalize(text);
    let script = app_code_screen_next_click_script();
    await page.evaluate(script);
    await page.waitForTimeout(180);
    let second = await app_code_screen_capture(page);
    let text2 = property_get(second, "text");
    let kind = app_code_screen_text_normalize(text2);
    let moved = equal_not(kind0, kind);
    ("reload the way F5 does - re-load the CURRENT address including the hash that Next updated. page.reload() can re-load the originally committed url (quiz=0) instead of the SPA-updated hash, which would falsely look like a reset");
    let current = page.url();
    await page.goto(current);
    await page.waitForTimeout(180);
    let reloaded = await app_code_screen_capture(page);
    let text3 = property_get(reloaded, "text");
    let after = app_code_screen_text_normalize(text3);
    let persisted = equal(after, kind);
    let result = {
      id,
      moved,
      persisted,
    };
    list_add(results, result);
  }
  await each_async(lesson_ids, check);
}

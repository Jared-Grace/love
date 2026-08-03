import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { equal_not } from "./equal_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_code_screen_capture } from "./app_code_screen_capture.mjs";
import { app_code_screen_text_normalize } from "./app_code_screen_text_normalize.mjs";
import { app_code_screen_next_click_script } from "./app_code_screen_next_click_script.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { error } from "./error.mjs";
export async function app_code_reload_persists_test(url_prefix) {
  "regression test for the quiz-position-survives-reload bug that reached a user: clicking Next advanced storage but not the url hash, so a browser reload re-seeded the OLD position and dropped back to the first quiz. For a couple of multi-kind lessons it goes quiz 0, Next to the next kind, then RELOADS, and asserts the reloaded screen still matches the later kind (and that Next actually moved). Throws if the position does not survive reload - so the bug can never silently return";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let lesson_ids = [
    "symbols_digits_numbered",
    "operators_remainder_by_dividing",
  ];
  let results = [];
  async function on_page(page) {
    async function check(id) {
      "the three words this address stands on are frozen, so each is read off the function holding it rather than spelled into the joined-up text - a word fused into a separator is invisible to everything that watches for a wording change";
      let v = app_code_screen_hash_key();
      let f_name = fn_name("app_code_quiz");
      let v2 = app_code_quiz_hash_key();
      let combined = text_combine_multiple([
        "&",
        v,
        "=",
        f_name,
        "&",
        v2,
        "=0",
      ]);
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
  await playwright_test_url(url_prefix, on_page);
  function assert_ok(result) {
    let id = property_get(result, "id");
    let moved = property_get(result, "moved");
    let persisted = property_get(result, "persisted");
    if (not(moved)) {
      let message = text_combine_multiple([
        "reload test: Next did not change the quiz kind for ",
        id,
        " - cannot judge reload persistence",
      ]);
      error(message);
    }
    if (not(persisted)) {
      let message = text_combine_multiple([
        "reload test: quiz position did NOT survive a reload for ",
        id,
        " - the refresh regression is back",
      ]);
      error(message);
    }
  }
  each(results, assert_ok);
  return results;
}

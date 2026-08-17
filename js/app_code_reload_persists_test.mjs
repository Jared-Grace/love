import { app_code_reload_persists_test_on_page } from "./app_code_reload_persists_test_on_page.mjs";
import { playwright_test_url } from "./playwright_test_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each } from "./each.mjs";
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
    let r = await app_code_reload_persists_test_on_page(
      page,
      url_prefix,
      results,
      lesson_ids,
    );
    return r;
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

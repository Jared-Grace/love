import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_en_stores } from "./app_learn_en_stores.mjs";
import { app_shared_url_dev_local_named } from "./app_shared_url_dev_local_named.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_get } from "./property_get.mjs";
import { page_boot_wait_ms } from "./page_boot_wait_ms.mjs";
import { page_boot_poll_ms } from "./page_boot_poll_ms.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function app_learn_en_tab_titles_report() {
  "For each language the English-learning app offers, the title its browser tab shows once the app is opened on this machine with that language in the address - beside the title that language's own function says it should show.";
  "Each language is opened in its own fresh browser, so a language remembered from the one before cannot answer for this one. It waits for the tab to show the expected title and stops the moment it does, so a tab that never changes is only ever paid for at the full deadline.";
  "Needs the local server running and the app's local build fresh; a title that never arrives may mean either is missing rather than that the code is wrong.";
  arguments_assert(arguments, 0);
  let stores = app_learn_en_stores();
  let left = app_shared_url_dev_local_named("learn_en");
  let key = app_shared_bible_language_hash_key();
  let property_name = language_code_key();
  let r = [];
  for (let store of stores) {
    let language_code = property_path_get_2(store, "language", property_name);
    let expected = property_get(store, "title");
    let url = left + "#" + key + "=" + language_code;
    let shown = null;
    async function on_page(page) {
      await page.goto(url, {
        waitUntil: "domcontentloaded",
      });
      let deadline = page_boot_wait_ms();
      let step = page_boot_poll_ms();
      let waited = 0;
      while (less_than(waited, deadline)) {
        await page.waitForTimeout(step);
        waited += step;
        shown = await page.title();
        if (equal(shown, expected)) {
          break;
        }
      }
    }
    await playwright_test_blank(on_page);
    r.push({
      language_code,
      expected,
      shown,
      matches: equal(shown, expected),
    });
  }
  return r;
}

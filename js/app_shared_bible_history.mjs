import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_history_hash_set } from "./app_shared_bible_history_hash_set.mjs";
import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { app_shared_bible_history_fill } from "./app_shared_bible_history_fill.mjs";
export async function app_shared_bible_history(context) {
  "the readings this app has been left on, as its own screen reached from settings; back returns to the settings hub";
  "picking one points the link at that passage and then draws this app again in the reader that reading was taken down in, landing on the screen this app opens with - which is the one that reads the link.";
  "Drawing the app again rather than just changing screen, because a reading remembers which of the two readers it was in and the two are not the same page. Handing the home screen alone leaves the tab in the reader it was already in: a whole chapter with several verses picked, opened this way from the single-verse reader, went looking for a verse called five-to-nine, found no such verse, and printed the failure where the passage should have been.";
  async function lambda_back() {
    await app_shared_screen_set(context, app_shared_bible_settings);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  let container = html_div(root);
  async function open_entry(entry) {
    app_shared_bible_history_hash_set(entry);
    await app_shared_bible_screen_home_set(context);
  }
  await app_shared_bible_history_fill(container, context, open_entry);
}

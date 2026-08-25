import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_panel_unnamed_open } from "./app_shared_bible_panel_unnamed_open.mjs";
import { app_shared_bible_history_hash_set } from "./app_shared_bible_history_hash_set.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_bible_history_fill } from "./app_shared_bible_history_fill.mjs";
export async function app_shared_bible_history_panel(content, back, context) {
  "the readings this app has been left on, opened in place by the chapter reader; back is supplied by the caller and returns to the settings hub";
  "picking one points the link at that passage and loads the page again. this reader works out what it is reading from the link as it starts, so loading again is not a way of giving up - it is the way this reader is told anything at all, and it is how every other leaving of this hub already works.";
  arguments_assert(arguments, 3);
  let container = app_shared_bible_panel_unnamed_open(content, back);
  function open_entry(entry) {
    app_shared_bible_history_hash_set(entry);
    window_reload();
  }
  await app_shared_bible_history_fill(container, context, open_entry);
}

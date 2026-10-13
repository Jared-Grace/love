import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_unsent_sync } from "./app_shared_unsent_sync.mjs";
import { html_on_window } from "./html_on_window.mjs";
import { app_chapter_group_hash_tidy } from "./app_chapter_group_hash_tidy.mjs";
import { app_shared_folder_choose } from "./app_shared_folder_choose.mjs";
import { app_chapter_group_verse_draw } from "./app_chapter_group_verse_draw.mjs";
import { app_chapter_group_chapter_draw } from "./app_chapter_group_chapter_draw.mjs";
import { app_shared_bible_read } from "./app_shared_bible_read.mjs";
export function app_chapter_group_main(context) {
  "Divides a chapter of the bible into groups of verses, kept under a folder code so that everybody given the code divides the same chapters together.";
  "It asks for the folder the way the receipts app does - the link first, then this device, and the code box only when none is known - and then it is the whole-chapter reader the bible app has, with the same way of choosing a book and a chapter, and the grouping hung on the two places that reader leaves for an app.";
  "Every verse is in one group until a group is begun at a verse, and a group is joined to the next from under its last verse.";
  "Whenever the internet comes back, whatever is waiting on this device is sent.";
  "The reader draws through this again each time the chapter changes, so the list of what the verses gave is started afresh once a chapter has taken it - a second drawing never inherits the first one's verses.";
  app_shared_app_fn_set(context, app_chapter_group_main);
  let root = property_get(context, "root");
  let app_name = fn_name("app_chapter_group");
  async function on_online() {
    await app_shared_unsent_sync();
  }
  html_on_window("online", on_online);
  app_chapter_group_hash_tidy();
  app_shared_folder_choose(root, app_name, on_folder);
  async function on_folder(folder_code, on_change) {
    let entries = [];
    function verse_action(context_verse, actions, chapter_code, verse_number) {
      app_chapter_group_verse_draw(entries, actions, verse_number);
    }
    async function chapter_action(content, chapter_code) {
      let drawn = entries;
      entries = [];
      await app_chapter_group_chapter_draw({
        app_name,
        folder_code,
        on_change,
        entries: drawn,
        content,
        chapter_code,
      });
    }
    await app_shared_bible_read(context, verse_action, chapter_action);
  }
}

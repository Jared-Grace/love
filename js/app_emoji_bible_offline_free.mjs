import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_chapter_codes_canonical_browser } from "./ebible_chapter_codes_canonical_browser.mjs";
import { bible_glyph_chapter_destinations } from "./bible_glyph_chapter_destinations.mjs";
import { download_cache_key } from "./download_cache_key.mjs";
import { list_add } from "./list_add.mjs";
import { download_cache_store } from "./download_cache_store.mjs";
import { indexeddb_delete_list_backend } from "./indexeddb_delete_list_backend.mjs";
import { download_cache_database } from "./download_cache_database.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { app_emoji_bible_offline_saved_set } from "./app_emoji_bible_offline_saved_set.mjs";
export async function app_emoji_bible_offline_free() {
  arguments_assert(arguments, 0);
  ("Give back the space the saved picture Bible takes: every chapter file the save wrote, gone in one write, and the device no longer named as holding it.");
  ("THE KEYS ARE BUILT FROM THE SAME LIST THE SAVE USED, rather than found by a prefix, because the store also holds every other download this site keeps, and a prefix wide enough to catch both kinds of chapter could carry off something else.");
  ("A chapter read since is freed too. It was only a copy, and reading it again fetches it again.");
  let project_url = firebase_storage_url_project_jg();
  let chapter_codes = await ebible_chapter_codes_canonical_browser();
  let keys = [];
  for (let chapter_code of chapter_codes) {
    let destinations = bible_glyph_chapter_destinations(chapter_code);
    for (let destination of destinations) {
      let key = download_cache_key(project_url, destination);
      list_add(keys, key);
    }
  }
  async function clear() {
    let store = download_cache_store();
    await indexeddb_delete_list_backend(download_cache_database, store, keys);
  }
  await catch_null_async(clear);
  app_emoji_bible_offline_saved_set(false);
}

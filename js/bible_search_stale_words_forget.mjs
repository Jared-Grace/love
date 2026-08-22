import { bible_search_built_download } from "./bible_search_built_download.mjs";
import { bible_search_built_path } from "./bible_search_built_path.mjs";
import { bible_search_saved_words_delete } from "./bible_search_saved_words_delete.mjs";
import { download_cache_get } from "./download_cache_get.mjs";
import { download_cache_key } from "./download_cache_key.mjs";
import { download_cache_put } from "./download_cache_put.mjs";
import { equal } from "./equal.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { null_is } from "./null_is.mjs";
export async function bible_search_stale_words_forget() {
  "Throw away this device's saved copies of the search index when the index they came from is no longer the one storage holds.";
  "A saved copy is handed to the reader at once and refreshed behind them, which is right for a verse - written once, read forever, and one visit late costs nothing. The index is not that. It is built again from the beginning every time, and a chapter and verse it named last time may not be named this time; the page then draws that reference, asks the reader's bible for words that are not in it, and puts a reference over a gap. So the index is the one saved thing that has to be dated, and the date is the build storage is holding.";
  "Once a visit, however many words the search asks for. Every word waits behind this, so no word is fetched into a copy that is about to be thrown away.";
  let fn = bible_search_stale_words_forget;
  async function once() {
    let built = await bible_search_built_download();
    let unknown = null_is(built);
    if (unknown) {
      ("no mark to judge them by, so the saved copies stand - being offline must read as the reader keeping what they have, never as losing it");
      return null;
    }
    let project_url = firebase_storage_url_project_jg();
    let path = bible_search_built_path();
    let key = download_cache_key(project_url, path);
    let remembered = await download_cache_get(key);
    let same = equal(remembered, built);
    if (same) {
      return built;
    }
    await bible_search_saved_words_delete();
    ("the new mark is written only after the old copies are gone, so a visit that stops halfway comes back and deletes them rather than trusting them");
    await download_cache_put(key, built);
    return built;
  }
  let value = await global_function_property_initialize_async(
    fn,
    "built",
    once,
  );
  return value;
}

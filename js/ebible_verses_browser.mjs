import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
import { ebible_offline_chapter_verses_get } from "./ebible_offline_chapter_verses_get.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_verses_browser(bible_folder, chapter_code) {
  async function get() {
    "a downloaded bible answers first, so a reader with no internet still turns the page";
    let offline = await ebible_offline_chapter_verses_get(
      bible_folder,
      chapter_code,
    );
    if (null_not_is(offline)) {
      return offline;
    }
    let verses = await ebible_verses_storage_browser(
      bible_folder,
      chapter_code,
    );
    return verses;
  }
  let value = await global_function_call_cache_async(
    ebible_verses_browser,
    arguments,
    get,
  );
  return value;
}

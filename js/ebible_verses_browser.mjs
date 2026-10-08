import { ebible_offline_chapter_verses_get } from "./ebible_offline_chapter_verses_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { ebible_verses_english_kept_structure } from "./ebible_verses_english_kept_structure.mjs";
import { null_is } from "./null_is.mjs";
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
  async function attempt() {
    let value = await global_function_call_cache_async(
      ebible_verses_browser,
      [bible_folder, chapter_code],
      get,
    );
    return value;
  }
  let english = ebible_folder_english();
  let english_is = equal(bible_folder, english);
  if (not(english_is)) {
    let value = await attempt();
    return value;
  }
  ("English is asked for which verses a chapter has whatever language is being read, so where English itself cannot be had the English index another saved bible keeps answers with the numbers instead. it is asked only after the internet has failed, so a reader who can reach the words is never handed numbers without them");
  try {
    let value = await attempt();
    return value;
  } catch (e) {
    let structure = await ebible_verses_english_kept_structure(chapter_code);
    if (null_is(structure)) {
      throw e;
    }
    return structure;
  }
}

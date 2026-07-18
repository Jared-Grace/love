import { list_last } from "./list_last.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_chapter_codes_browser } from "./ebible_chapter_codes_browser.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
export async function app_shared_bible_change(
  chapter_code,
  languages_chosen,
  list_wrap,
) {
  let language = list_last(languages_chosen);
  let bible_folder = ebible_language_to_bible_folder(language);
  let list = await ebible_chapter_codes_browser(bible_folder);
  let next = list_wrap(list, chapter_code);
  function transform(hash) {
    property_set(hash, "c", next);
    property_set(hash, "v", "");
  }
  html_hash_transform_reload(transform);
}

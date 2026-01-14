import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_chapters(context) {
  marker("1");
  let root = html_clear_context(context);
  let e = ebible_folder_english();
  let list = await ebible_chapter_codes(e);
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let filtered = list_filter_starts_with(list, book_code);
  let mapped = list_map_prefix_without(list2, prefix);
  log({
    filtered,
  });
}

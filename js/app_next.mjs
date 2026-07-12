import { ebible_verse_browser } from "./ebible_verse_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { list_find_json_next } from "./list_find_json_next.mjs";
import { ebible_index_flat } from "./ebible_index_flat.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { property_set } from "./property_set.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
export async function app_next(context) {
  let hash = html_hash_object_get();
  let chapter_code = property_get(hash, "c");
  let verse_number = property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  async function lambda(language) {
    let bible_folder = ebible_language_to_bible_folder(language);
    let d = await ebible_verse_browser(
      bible_folder,
      chapter_code,
      verse_number,
    );
    let text = property_get(d, "text");
    return text;
  }
  let version_english = "engbsb";
  let books = await ebible_version_books_browser(version_english);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let mapped = await list_map_unordered_async(languages_chosen, lambda);
  list_add_first(mapped, reference);
  let list = await ebible_index_flat(version_english);
  let next = list_find_json_next(list, {
    chapter_code,
    verse_number,
  });
  let chapter_code2 = property_get(next, "chapter_code");
  let verse_number2 = property_get(next, "verse_number");
  property_set(hash, "v", verse_number2);
  property_set(hash, "c", chapter_code2);
  let h = hash_to_url(hash);
  let url = html_url_without_hash();
  url += h;
  list_add(mapped, url);
  let joined = await list_join_newline_2_copy(mapped);
  let root = property_get(context, "root");
  html_text_set(root, joined);
}

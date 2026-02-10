import { ebible_language_to_bible_folder } from "../../../love/public/src/ebible_language_to_bible_folder.mjs";
import { app_next_hash_to_languages_chosen } from "../../../love/public/src/app_next_hash_to_languages_chosen.mjs";
import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
import { list_find_json_next } from "../../../love/public/src/list_find_json_next.mjs";
import { ebible_index_flat } from "../../../love/public/src/ebible_index_flat.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { html_url_without_hash } from "../../../love/public/src/html_url_without_hash.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_next_main(context) {
  firebase_name_jg();
  let hash = html_hash_object_get();
  let chapter_code = property_get(hash, "c");
  let verse_number = property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  async function lambda2(language) {
    let bible_folder = ebible_language_to_bible_folder(language);
    let d = await ebible_verse(bible_folder, chapter_code, verse_number);
    let text = property_get(d, "text");
    return text;
  }
  const version_english = "engbsb";
  let books = await ebible_version_books(version_english);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let mapped = await list_map_unordered_async(languages_chosen, lambda2);
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
  const h2 = hash_to_url(hash);
  let url = html_url_without_hash();
  url += "" + h2;
  list_add(mapped, url);
  let joined = await list_join_newline_2_copy(mapped);
  let root = property_get(context, "root");
  html_text_set(root, joined);
}

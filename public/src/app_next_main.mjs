import { each_object } from "../../../love/public/src/each_object.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { string_split_plus } from "../../../love/public/src/string_split_plus.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_next_main() {
  marker("1");
  firebase_name_jg();
  let result = html_hash_object_get();
  let chapter_code = object_property_get(result, "c");
  let verse = object_property_get(result, "v");
  let l = object_property_get(result, "l");
  let languages_chosen = string_split_plus(l);
  let languages_list = ebible_languages();
  async function lambda2(language) {
    let filtered = list_find_property(
      languages_list,
      "language_code",
      language,
    );
    let bible_folder = object_property_get(filtered, "bible_folder");
    let d = await ebible_verse(bible_folder, chapter_code, verse);
    let text = object_property_get(d, "text");
    return text;
  }
  let books = await ebible_version_books("engbsb");
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse,
  ]);
  let mapped = await list_map_unordered_async(languages_chosen, lambda2);
  list_add(mapped, reference);
  let joined = await list_join_newline_2_copy(mapped);
  let body = html_document_body();
  html_text_set(body, joined);
  let verse_number = integer_to(verse);
  verse_number += 1;
  object_property_set(result, "v", verse_number);
  function lambda(value, property) {}
  each_object(object, lambda);html_url_without_hash
}

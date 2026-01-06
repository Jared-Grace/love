import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { ebible_language_to_bible_folder } from "../../../love/public/src/ebible_language_to_bible_folder.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { app_next_hash_to_languages_chosen } from "../../../love/public/src/app_next_hash_to_languages_chosen.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_chapter_main() {
  marker("1");
  firebase_name_jg();
  let body = html_document_body();
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let verse_number = object_property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  let first = list_first(languages_chosen);
  let bible_folder = ebible_language_to_bible_folder(first);
  let list = await ebible_verses(bible_folder, chapter_code);
  let books = await ebible_version_books(bible_folder);
  let mapped = list_map_property(list3, property_name);
  let v = list_first_last(list2);
  function lambda(item) {
    let verse_number = object_property_get(item, "verse_number");
    let text = object_property_get(item, "text");
    let reference = ebible_parts_chapter_code_to_reference(
      chapter_code,
      books,
      [verse_number],
    );
    html_p_text(body, verse_number + " " + text);
  }
  each(list, lambda);
}

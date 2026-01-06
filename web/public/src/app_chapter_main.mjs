import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { ebible_language_to_bible_folder } from "../../../love/public/src/ebible_language_to_bible_folder.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
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
  let bible_folder = ebible_language_to_bible_folder(languages_list, language);
  let f = list_find_property(languages_list, "language_code", first);
  let list = await ebible_verses(bible_folder, chapter_code);
  let p = html_p_text(body, list);
}

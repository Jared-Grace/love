import { app_next_hash_to_languages_chosen } from "../../../love/public/src/app_next_hash_to_languages_chosen.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_chapter_main() {
  marker("1");
  firebase_name_jg();
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let verse_number = object_property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
}

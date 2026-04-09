import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { html_hash_set_object } from "../../../love/public/src/html_hash_set_object.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function app_bible_chapter_set(chapter_code) {
  let hash = html_hash_object_get();
  transform(hash);
  html_hash_set_object(hash);
  function transform(hash) {
    property_set(hash, "c", chapter_code);
  }
}

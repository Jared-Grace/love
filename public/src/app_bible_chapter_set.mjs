import { html_hash_transform } from "../../../love/public/src/html_hash_transform.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function app_bible_chapter_set(chapter_code) {
  const property_name = "c";
  html_hash_transform(transform);
  function transform(hash) {
    property_set(hash, property_name, chapter_code);
  }
}

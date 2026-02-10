import { html_hash_set_object } from "../../../love/public/src/html_hash_set_object.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function app_bible_chapter_set(hash, chapter_code) {
  property_set(hash, "c", chapter_code);
  html_hash_set_object(hash);
}

import { html_hash_set_object } from "../../../love/public/src/html_hash_set_object.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function app_bible_verse_set(hash, verse_number) {
  property_set(hash, "v", verse_number);
  html_hash_set_object(hash);
}

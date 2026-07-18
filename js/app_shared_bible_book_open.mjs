import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_book_open(book_code) {
  function transform(hash) {
    property_set(hash, "b", book_code);
    property_set(hash, "c", "");
    property_set(hash, "v", "");
  }
  html_hash_transform_reload(transform);
}

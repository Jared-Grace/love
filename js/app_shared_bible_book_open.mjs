import { window_reload } from "./window_reload.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_book_open(book_code) {
  function transform(hash) {
    property_set(hash, "b", book_code);
    property_set(hash, "c", "");
    property_set(hash, "v", "");
  }
  html_hash_transform(transform);
  window_reload();
}

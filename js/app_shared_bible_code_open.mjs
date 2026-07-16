import { window_reload } from "./window_reload.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_code_open(chapter_code) {
  function transform(hash) {
    property_set(hash, "c", chapter_code);
    property_set(hash, "v", "");
    property_set(hash, "b", "");
  }
  html_hash_transform(transform);
  window_reload();
}

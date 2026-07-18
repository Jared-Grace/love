import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_code_open(chapter_code) {
  function transform(hash) {
    property_set(hash, "c", chapter_code);
    property_set(hash, "v", "");
    property_set(hash, "b", "");
    property_set(hash, "ref", "");
  }
  html_hash_transform_reload(transform);
}

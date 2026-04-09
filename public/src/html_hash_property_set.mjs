import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_hash_transform } from "../../../love/public/src/html_hash_transform.mjs";
export function html_hash_property_set(property_name, chapter_code) {
  html_hash_transform(transform);
  function transform(hash) {
    property_set(hash, property_name, chapter_code);
  }
}

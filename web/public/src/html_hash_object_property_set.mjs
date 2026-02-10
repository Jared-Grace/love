import { html_hash_set_object } from "../../../love/public/src/html_hash_set_object.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
export function html_hash_object_property_set(scroll_top_key, scroll_top) {
  let hash2 = html_hash_object_get();
  property_set(hash2, scroll_top_key, scroll_top);
  html_hash_set_object(hash2);
}

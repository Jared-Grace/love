import { html_hash_set_object } from "./html_hash_set_object.mjs";
import { property_set } from "./property_set.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
export function html_hash_object_property_set(scroll_top_key, scroll_top) {
  let hash = html_hash_object_get();
  property_set(hash, scroll_top_key, scroll_top);
  html_hash_set_object(hash);
}

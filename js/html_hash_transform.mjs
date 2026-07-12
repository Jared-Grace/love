import { html_hash_set_object } from "./html_hash_set_object.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
export function html_hash_transform(transform) {
  let hash = html_hash_object_get();
  transform(hash);
  html_hash_set_object(hash);
}

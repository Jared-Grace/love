import { html_hash_set_object } from "../../../love/public/src/html_hash_set_object.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
export function html_hash_transform(transform) {
  let hash = html_hash_object_get();
  transform(hash);
  html_hash_set_object(hash);
}

import { html_hash_set } from "../../../love/public/src/html_hash_set.mjs";
import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
export function html_hash_set_object(hash) {
  let url = hash_to_url(hash);
  html_hash_set(url);
}

import { html_hash_get } from "./html_hash_get.mjs";
import { html_title_set } from "./html_title_set.mjs";
import { text_skip } from "./text_skip.mjs";
export function app_g_title_hash() {
  let hash = html_hash_get();
  let name = text_skip(hash, 1);
  if (name !== "") {
    html_title_set(name);
  }
}

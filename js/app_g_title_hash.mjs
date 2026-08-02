import { not_equal } from "./not_equal.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { html_title_set } from "./html_title_set.mjs";
export function app_g_title_hash() {
  let name = html_hash_name_get();
  if (not_equal(name, "")) {
    html_title_set(name);
  }
}

import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { app_shared_name_search_info_fn } from "./app_shared_name_search_info_fn.mjs";
import { property_get } from "./property_get.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
export async function app_shared_url_suffix_hash(app_fn, hash) {
  let hash_url = hash_to_url(hash);
  let r = await app_shared_name_search_info_fn(app_fn);
  let a_name = property_get(r, "a_name");
  let file_name = file_name_html(a_name);
  let s = text_slash_forward();
  let url_suffix = text_combine_multiple([s, file_name, hash_url]);
  return url_suffix;
}

import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
import { app_shared_name_search_info_fn } from "../../../love/public/src/app_shared_name_search_info_fn.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
export async function app_shared_url_suffix_hash(app_fn, hash) {
  let hash_url = hash_to_url(hash);
  let r = await app_shared_name_search_info_fn(app_fn);
  let a_name = property_get(r, "a_name");
  let file_name = file_name_html(a_name);
  let s = text_slash_forward();
  let combined = text_combine_multiple(list);
  return suffix;
}

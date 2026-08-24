import { app_shared_name_search_info_fn } from "./app_shared_name_search_info_fn.mjs";
import { app_shared_path_dev_served } from "./app_shared_path_dev_served.mjs";
import { property_get } from "./property_get.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_url_suffix_dev_hash(app_fn, hash) {
  "the part of a dev address that comes after the server: the app's served page with a screen's own words already on the end of it";
  "it used to take only the step above the repo off the front of the BUILT path, which left the repo and the public folder in and named a page nothing serves. A browser refused it outright rather than fetching a missing page, so every caller that opened one of these was opening nothing.";
  let hash_url = hash_to_url(hash);
  let r = await app_shared_name_search_info_fn(app_fn);
  let a_name = property_get(r, "a_name");
  let served = app_shared_path_dev_served(a_name);
  let suffix = text_combine_multiple([served, hash_url]);
  return suffix;
}

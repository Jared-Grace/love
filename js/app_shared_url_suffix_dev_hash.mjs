import { app_shared_name_search_info_fn } from "./app_shared_name_search_info_fn.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { property_get } from "./property_get.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_url_suffix_dev_hash(app_fn, hash) {
  let hash_url = hash_to_url(hash);
  let r = await app_shared_name_search_info_fn(app_fn);
  let f_path_dev = property_get(r, "f_path_dev");
  let previous = folder_previous();
  let together = text_prefix_without(f_path_dev, previous);
  let suffix = text_combine_multiple([together, hash_url]);
  return suffix;
}

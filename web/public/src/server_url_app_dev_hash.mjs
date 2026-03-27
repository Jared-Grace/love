import { server_url } from "../../../love/public/src/server_url.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { app_prefix_without_fn } from "../../../love/public/src/app_prefix_without_fn.mjs";
import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
export async function server_url_app_dev_hash(hash, app_fn) {
  let url2 = hash_to_url(hash);
  let without = app_prefix_without_fn(app_fn);
  let r = await app_shared_name_search_info(without);
  let f_path_dev = property_get(r, "f_path_dev");
  let previous = folder_previous();
  let together = text_prefix_without(f_path_dev, previous);
  const url = server_url() + together + "" + url2;
  return url;
}

import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
export async function app_shared_name_search_info_fn(app_fn) {
  let without = app_shared_name_prefix_without_fn(app_fn);
  let r = await app_shared_name_search_info(without);
  return r;
}

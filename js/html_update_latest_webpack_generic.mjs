import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { html_code_script_src_js_version_any_route } from "./html_code_script_src_js_version_any_route.mjs";
import { log } from "./log.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
export async function html_update_latest_webpack_generic(
  search,
  path,
  cache_bust,
) {
  let r = await app_shared_name_search_info(search);
  let f_path_latest = property_get(r, path);
  let a_name = property_get(r, "a_name");
  let version_query = "";
  if (cache_bust) {
    let right = date_now_milliseconds();
    version_query = text_combine("?v=", right);
  }
  let c = html_code_script_src_js_version_any_route(a_name, version_query);
  log(html_update_latest_webpack_generic.name, {
    f_path_latest,
  });
  await html_overwrite(a_name, f_path_latest, c);
}

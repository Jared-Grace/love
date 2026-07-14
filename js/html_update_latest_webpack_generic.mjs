import { log } from "./log.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
import { html_code_script_src_js_version } from "./html_code_script_src_js_version.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { text_combine } from "./text_combine.mjs";
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
    version_query = text_combine("?v=", Date.now());
  }
  let c = html_code_script_src_js_version(a_name, version_query);
  log(html_update_latest_webpack_generic.name, {
    f_path_latest,
  });
  await html_overwrite(a_name, f_path_latest, c);
}

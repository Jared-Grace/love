import { log } from "../../../love/public/src/log.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_src_js } from "../../../love/public/src/html_code_script_src_js.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_latest_webpack_generic(search, path) {
  let r = await app_shared_name_search_info(search);
  let f_path_latest = property_get(r, path);
  let a_name = property_get(r, "a_name");
  let c = html_code_script_src_js(a_name);
  log({
    f_path_latest,
  });
  await html_overwrite(a_name, f_path_latest, c);
}

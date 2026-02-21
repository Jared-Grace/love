import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_latest_new(search) {
  let r = await app_shared_name_search_info(search);
  let f_path_latest = property_get(r, "f_path_latest");
  let a_name = property_get(r, "a_name");
  let script = html_code_script_module();
  await html_overwrite(a_name, f_path_latest, joined);
}

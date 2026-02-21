import { html_code_script_src } from "../../../love/public/src/html_code_script_src.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { file_name_js } from "./file_name_js.mjs";
export async function html_update_latest_new(search) {
  let r = await app_shared_name_search_info(search);
  let f_path_latest = property_get(r, "f_path_latest");
  let a_name = property_get(r, "a_name");
  let f_name = property_get(r, "f_name");
  let src = file_name_js(f_name);
  let c = html_code_script_src(src);
  await html_overwrite(a_name, f_path_latest, c);
}

import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { js_code_dot_same } from "../../../love/public/src/js_code_dot_same.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { html_code_script_attributes } from "../../../love/public/src/html_code_script_attributes.mjs";
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
  let code2 = js_code_dot_same(f_name);
  let code3 = js_code_dot_same(app_context_initialize.a_name);
  let code = js_code_call_args(code2, [code2]);
  let middle = 1;
  let c2 = html_code_script_attributes({}, middle);
  await html_overwrite(a_name, f_path_latest, c);
}

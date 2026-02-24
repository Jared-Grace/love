import { html_code_script_src_js } from "../../../love/public/src/html_code_script_src_js.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { js_code_dot_same } from "../../../love/public/src/js_code_dot_same.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { html_code_script_attributes } from "../../../love/public/src/html_code_script_attributes.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_latest_webpack(search) {
  let r = await app_shared_name_search_info(search);
  let f_path_latest = property_get(r, "f_path_latest");
  let a_name = property_get(r, "a_name");
  let f_name = property_get(r, "f_name");
  let c = html_code_script_src_js(f_name);
  let code2 = js_code_dot_same(f_name);
  let code3 = js_code_dot_same(app_context_initialize.name);
  let code = js_code_call_args(code3, [code2]);
  let c2 = html_code_script_attributes({}, code);
  let joined = list_join_newline([c, c2]);
  await html_overwrite(a_name, f_path_latest, joined);
}

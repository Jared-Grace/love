import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { html_code } from "../../../love/public/src/html_code.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { functions_dependencies_code_split } from "../../../love/public/src/functions_dependencies_code_split.mjs";
import { webpack_build_generic_source_fn_names } from "../../../love/public/src/webpack_build_generic_source_fn_names.mjs";
import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function app_shared_source_copy(search) {
  let a = await app_shared_name_search_info(search);
  let f_name = property_get(a, "f_name");
  let a_name = property_get(a, "a_name");
  let call = js_code_call_app_context_initialize(f_name);
  let fns = webpack_build_generic_source_fn_names(f_name);
  let d = await functions_dependencies_code_split(fns);
  let code = list_join_newline([call, d]);
  let script = html_code_script_module(code);
  let contents = html_code(a_name, script);
  await clipboard_copy(contents);
}

import { html_code } from "../../../love/public/src/html_code.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { functions_dependencies_code_split } from "../../../love/public/src/functions_dependencies_code_split.mjs";
import { webpack_build_generic_source_fn_names } from "../../../love/public/src/webpack_build_generic_source_fn_names.mjs";
import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function app_shared_source(search) {
  let a = await app_shared_name_search_info(search);
  let f_name = property_get(a, "f_name");
  let call = js_code_call_app_context_initialize(f_name);
  let fns = webpack_build_generic_source_fn_names(f_name);
  let code = await functions_dependencies_code_split(fns);
  list_join_newline([call, code]);
  let contents = html_code(name, body);
  return joined;
}

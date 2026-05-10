import { webpack_build_generic_source_fn_names } from "../../../love/public/src/webpack_build_generic_source_fn_names.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { webpack_build_code_import } from "../../../love/public/src/webpack_build_code_import.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function webpack_build_generic_source(f_name) {
  let fns = webpack_build_generic_source_fn_names(f_name);
  let call = js_code_call_app_context_initialize(f_name);
  let mapped = list_map(fns, webpack_build_code_import);
  list_add(mapped, call);
  let joined = list_join_newline(mapped);
  return joined;
}

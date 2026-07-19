import { webpack_build_generic_source_fn_names } from "./webpack_build_generic_source_fn_names.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_call_app_shared_context_initialize } from "./js_code_call_app_shared_context_initialize.mjs";
import { webpack_build_code_import } from "./webpack_build_code_import.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function webpack_build_generic_source(f_name) {
  let fns = webpack_build_generic_source_fn_names(f_name);
  let call = js_code_call_app_shared_context_initialize(f_name);
  let mapped = await list_map_async(fns, webpack_build_code_import);
  list_add(mapped, call);
  let joined = list_join_newline(mapped);
  return joined;
}

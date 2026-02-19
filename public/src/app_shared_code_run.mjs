import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
export function app_shared_code_run(f_name, dependencies, code_call_get) {
  let global_init = js_code_global_init();
  let call = code_call_get(f_name);
  let code = list_join_newline([global_init, dependencies, call]);
  return code;
}

import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { function_dependencies_code_multiple } from "./function_dependencies_code_multiple.mjs";
export async function function_dependencies_code_call(f_name) {
  let r = await function_dependencies_code_multiple([f_name]);
  function lambda(dependencies) {
    let global_init = js_code_global_init();
    let call = js_code_call_statement(f_name);
    let code = list_join_newline([global_init, dependencies, call]);
    return code;
  }
  let value2 = property_change(o, "code", lambda);
  return r;
}

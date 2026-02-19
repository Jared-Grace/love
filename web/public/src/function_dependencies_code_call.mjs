import { property_change } from "../../../love/public/src/property_change.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { function_dependencies_code_multiple } from "./function_dependencies_code_multiple.mjs";
export async function function_dependencies_code_call(f_name) {
  let global_init = js_code_global_init();
  let r = await function_dependencies_code_multiple([f_name]);
  let dependencies = property_get(r, "code");
  function lambda(dependencies) {
    let call = js_code_call_statement(f_name);
    const code = `${global_init}
    ${dependencies}
    ${call}`;
    return code;
  }
  let value2 = property_change(o, "code", lambda);
  return r;
}

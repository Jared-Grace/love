import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
export async function function_dependencies_code_call(f_name) {
  let global_init = js_code_global_init();
  let v = await function_dependencies_code(f_name);
  let dependencies = property_get(v, "code");
  let externals = property_get(v, "externals");
  let call = js_code_call_statement(f_name);
  const code = `${global_init}
    ${dependencies}
    ${call}`;
  let v2 = {
    code,
    externals,
  };
  return v2;
}

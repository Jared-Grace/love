import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
export async function function_dependencies_code_call(f_name) {
  let code = await function_dependencies_code(f_name);
  let global_init = js_code_global_init();
  let call = js_code_call_statement(f_name);
  const middle = `${global_init}
    ${code}
    ${call}`;
  return middle;
}

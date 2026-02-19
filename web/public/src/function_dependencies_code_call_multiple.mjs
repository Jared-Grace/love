import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { app_shared_code_run } from "../../../love/public/src/app_shared_code_run.mjs";
import { function_dependencies_code_multiple } from "../../../love/public/src/function_dependencies_code_multiple.mjs";
export async function function_dependencies_code_call_multiple(
  f_name_call,
  f_names_dependencies,
  call_code_get,
) {
  let r = await function_dependencies_code_multiple(f_names_dependencies);
  function lambda(dependencies) {
    let code = app_shared_code_run(
      f_name_call,
      dependencies,
      js_code_call_statement,
    );
    return code;
  }
  let value2 = property_change(r, "code", lambda);
  return r;
}

import { app_shared_code_run } from "../../../love/public/src/app_shared_code_run.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { function_dependencies_code_multiple } from "./function_dependencies_code_multiple.mjs";
export async function function_dependencies_code_call(f_name) {
  const f_names = [f_name];
  let r = await function_dependencies_code_multiple(f_names);
  function lambda(dependencies) {
    let code = app_shared_code_run(f_name, dependencies);
    return code;
  }
  let value2 = property_change(r, "code", lambda);
  return r;
}

import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { app_shared_code_run } from "../../../love/public/src/app_shared_code_run.mjs";
import { function_dependencies_code_multiple } from "../../../love/public/src/function_dependencies_code_multiple.mjs";
export async function function_dependencies_code_call_multiple(
  f_name_call,
  f_names_dependencies,
  call_code_get,
) {
  list_add_if_not_includes(f_names_dependencies, f_name_call);
  let r = await function_dependencies_code_multiple(f_names_dependencies);
  function lambda(dependencies) {
    let code = app_shared_code_run(f_name_call, dependencies, call_code_get);
    return code;
  }
  let value2 = property_change(r, "code", lambda);
  return r;
}

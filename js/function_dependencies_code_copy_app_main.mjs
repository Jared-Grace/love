import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { functions_dependencies_code_copy } from "./functions_dependencies_code_copy.mjs";
export async function function_dependencies_code_copy_app_main(a) {
  let combined = app_shared_name_main(a);
  let v = await functions_dependencies_code_copy(combined);
  return v;
}

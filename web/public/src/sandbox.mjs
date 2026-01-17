import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
export async function sandbox() {
  let v2 = await function_dependencies_code_unaliased(app_g_main.name);
  let code = object_property_get(d, "code");
  return v2;
}

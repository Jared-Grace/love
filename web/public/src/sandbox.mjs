import { g_distance } from "../../../love/public/src/g_distance.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
export async function sandbox() {
  let v2 = await function_dependencies_code_unaliased(g_distance.name);
  let d = object_property_get(v2, "d");
  let code = object_property_get(d, "code");
  return code;
}

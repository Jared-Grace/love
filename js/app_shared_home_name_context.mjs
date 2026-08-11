import { property_path_get_2 } from "./property_path_get_2.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function app_shared_home_name_context(context) {
  let name = property_path_get_2(context, "app_fn", "name");
  let combined = function_name_combine(name, "home");
  return combined;
}

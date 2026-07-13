import { property_get } from "./property_get.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function app_shared_home_name(context) {
  let app_fn = property_get(context, "app_fn");
  let name = property_get(app_fn, "name");
  let combined = function_name_combine(name, "home");
  return combined;
}

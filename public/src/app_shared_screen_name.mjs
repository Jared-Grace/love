import { function_name_prefix_without } from "../../../love/public/src/function_name_prefix_without.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_shared_screen_name(context, fn) {
  let app_fn = property_get(context, "app_fn");
  let without = function_name_prefix_without(fn, app_fn);
  return without;
}

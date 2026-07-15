import { global_function_property_set_curried_specify_1_3 } from "./global_function_property_set_curried_specify_1_3.mjs";
import { g_tutorials_each } from "./g_tutorials_each.mjs";
import { app_g } from "./app_g.mjs";
export function app_g_tutorials_initialize() {
  let lambda = global_function_property_set_curried_specify_1_3(app_g, null);
  g_tutorials_each(lambda);
}

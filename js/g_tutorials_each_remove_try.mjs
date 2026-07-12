import { g_tutorials_each } from "./g_tutorials_each.mjs";
import { html_remove_if_not_null } from "./html_remove_if_not_null.mjs";
import { app_g_main } from "./app_g_main.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
export function g_tutorials_each_remove_try() {
  function lambda(tutorial) {
    let value = global_function_property_get(app_g_main, tutorial);
    html_remove_if_not_null(value);
  }
  g_tutorials_each(lambda);
}

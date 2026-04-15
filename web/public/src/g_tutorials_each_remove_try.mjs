import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { html_remove_if_not_null } from "../../../love/public/src/html_remove_if_not_null.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export function g_tutorials_each_remove_try() {
  function lambda2(tutorial) {
    let value = global_function_property_get(app_g_main, tutorial);
    html_remove_if_not_null(value);
  }
  g_tutorials_each(lambda2);
}

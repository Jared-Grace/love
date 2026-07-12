import { g_tutorials_each } from "../../love/js/g_tutorials_each.mjs";
import { html_remove_if_not_null } from "../../love/js/html_remove_if_not_null.mjs";
import { app_g } from "../../love/js/app_g.mjs";
import { global_function_property_get } from "../../love/js/global_function_property_get.mjs";
export function g_tutorials_each_remove_try() {
  function lambda(tutorial) {
    let value = global_function_property_get(app_g, tutorial);
    html_remove_if_not_null(value);
  }
  g_tutorials_each(lambda);
}

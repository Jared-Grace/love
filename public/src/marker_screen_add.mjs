import { function_param_new_double } from "../../../love/public/src/function_param_new_double.mjs";
import { marker_next_declare_single_init } from "../../../love/public/src/marker_next_declare_single_init.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_property } from "../../../love/public/src/js_property.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { data_app_current_get } from "../../../love/public/src/data_app_current_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function marker_screen_add(screen_name) {
  let a_name = await data_app_current_get();
  let prefixed = app_name_prefixed(a_name);
  let combined = function_name_combine(prefixed, "screens");
  async function lambda(a) {
    let { properties } = marker_next_declare_single_init(a);
    let key = js_parse_expression(screen_name);
    let combined_screen = function_name_combine(prefixed, screen_name);
    let value = js_parse_expression(combined_screen);
    let p = js_property(key, value);
    list_add(properties, p);
    await function_new(combined_screen);
    await function_param_new_double("context");
  }
  let v2 = await function_transform_marker_specified(
    combined,
    "screens",
    lambda,
  );
  marker("1");
  return v2;
}

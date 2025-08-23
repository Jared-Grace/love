import { list_add } from "./list_add.mjs";
import { js_property } from "./js_property.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { log } from "./log.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_app_current_get } from "./data_app_current_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { marker } from "./marker.mjs";
export async function marker_screen_add(screen_name) {
  let a_name = await data_app_current_get();
  let prefixed = app_name_prefixed(a_name);
  let combined = function_name_combine(prefixed, "screens");
  async function lambda(a) {
    let { next } = marker_next_get(a);
    let declarator = js_declare_single(next);
    let oe = object_property_get(declarator, "init");
    let { properties } = oe;
    log(oe);
    let p = js_property(param_name);
    list_add(properties, item);
  }
  let v2 = await function_transform_marker_specified(
    combined,
    "screens",
    lambda,
  );
  marker("1");
  return v2;
}

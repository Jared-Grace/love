import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
export async function app_a_functions_overlay(a, on_select) {
  let o = app_a_overlay(a);
  let overlay = object_property_get(o, "overlay");
  html_style_set(overlay, "overflow", "hidden");
  const replacement = {
    root: overlay,
  };
  let context = object_property_get(a, "context");
  let copy = object_copy_assign(context, replacement);
  function lambda3() {
    let overlay_close = object_property_get(o, "overlay_close");
    overlay_close();
  }
  app_a_button_function(context, overlay, lambda3);
  let r = await app_a_functions_generic(copy, on_select);
  return o;
}

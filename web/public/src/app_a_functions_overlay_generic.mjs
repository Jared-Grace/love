import { app_a_list_chooser } from "../../../love/public/src/app_a_list_chooser.mjs";
import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
export function app_a_functions_overlay_generic(a, texts, noun, lambda$text) {
  let overlay_result = app_a_overlay(a);
  let overlay = object_property_get(overlay_result, "overlay");
  html_style_set(overlay, "overflow", "hidden");
  const replacement = {
    root: overlay,
  };
  let context = object_property_get(a, "context");
  let copy = object_copy_assign(context, replacement);
  function lambda3() {
    let overlay_close = object_property_get(overlay_result, "overlay_close");
    overlay_close();
  }
  app_a_button_function(context, overlay, lambda3);
  let chooser_result = app_a_list_chooser(copy, noun, texts, lambda$text);
  let v = {
    overlay_result,
    chooser_result,
  };
  return v;
}

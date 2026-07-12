import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { app_a_list_chooser } from "./app_a_list_chooser.mjs";
import { app_a_button_function } from "./app_a_button_function.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_overlay } from "./app_a_overlay.mjs";
export function app_a_list_overlay_generic(a, texts, noun, lambda$text) {
  let overlay_result = app_a_overlay(a);
  let overlay = property_get(overlay_result, "overlay");
  html_style_overflow_hidden(overlay);
  let replacement = {
    root: overlay,
  };
  let context = property_get(a, "context");
  let copy = object_copy_assign(context, replacement);
  function lambda() {
    let overlay_close = property_get(overlay_result, "overlay_close");
    overlay_close();
  }
  app_a_button_function(context, overlay, lambda);
  let chooser_result = app_a_list_chooser(copy, noun, texts, lambda$text);
  let v = {
    overlay_result,
    chooser_result,
  };
  return v;
}

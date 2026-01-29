import { app_a_overlay_container_centered } from "../../../love/public/src/app_a_overlay_container_centered.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_overlay_close_button } from "../../../love/public/src/app_a_overlay_close_button.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
export function app_a_overlay_on_enter(on_enter, overlay_close, a) {
  let f = html_on_enter_lambda(on_enter);
  overlay_close();
  let overlay_result = app_a_overlay_keydown(a, f);
  app_a_overlay_close_button(o);
  let overlay = object_property_get(o, "overlay");
  let oc = app_a_overlay_container_centered(overlay);
  let v2 = {
    container,
    overlay,
    overlay_result,
  };
  return v2;
}

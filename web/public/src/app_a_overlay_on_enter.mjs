import { app_a_overlay_container_centered } from "../../../love/public/src/app_a_overlay_container_centered.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_a_overlay_close_button } from "../../../love/public/src/app_a_overlay_close_button.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
export function app_a_overlay_on_enter(on_enter, o, a) {
  let overlay_close = property_get(o, "overlay_close");
  let f = html_on_enter_lambda(on_enter);
  overlay_close();
  let overlay_result = app_a_overlay_keydown(a, f);
  app_a_overlay_close_button(overlay_result);
  let overlay = property_get(overlay_result, "overlay");
  let container = app_a_overlay_container_centered(overlay);
  let r = {
    container,
    overlay_result,
  };
  return r;
}

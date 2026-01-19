import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { app_a_overlay_close_text } from "../../../love/public/src/app_a_overlay_close_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_overlay_close_button(app_a_overlay_result) {
  let overlay = object_property_get(app_a_overlay_result, "overlay");
  let rename_overlay_close = object_property_get(
    app_a_overlay_result,
    "overlay_close",
  );
  let text = app_a_overlay_close_text();
  let component = app_a_button_wide(overlay, text, rename_overlay_close);
}

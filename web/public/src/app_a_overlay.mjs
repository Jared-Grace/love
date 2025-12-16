import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_overlay_z_max } from "../../../love/public/src/html_overlay_z_max.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function app_a_overlay(a, on_keydowns, on_keydown) {
  marker("1");
  let root2 = object_property_get(a, "root");
  let app_a_function_on_keydown = object_property_get(
    a,
    "app_a_function_on_keydown",
  );
  list_add(on_keydowns, on_keydown);
  let overlay = html_overlay_z_max(root);
  function overlay_close() {
    list_remove(on_keydowns, on_keydown);
    html_remove(overlay);
  }
  let v = {
    overlay,
    overlay_close,
  };
  return v;
}

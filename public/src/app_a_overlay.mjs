import { html_overlay_z_max } from "../../../love/public/src/html_overlay_z_max.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function app_a_overlay(root, on_keydowns, on_keydown) {
  marker("1");
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

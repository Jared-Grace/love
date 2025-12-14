import { marker } from "../../../love/public/src/marker.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function app_a_overlay(on_keydowns, on_keydown, overlay) {
  marker("1");
  let v3 = function lambda22() {
    list_remove(on_keydowns, on_keydown);
    html_remove(overlay);
  };
  return v3;
}

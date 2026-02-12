import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_overlay_z_max } from "../../../love/public/src/html_overlay_z_max.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function app_a_overlay_keydown(a, lambda$e) {
  let root = property_get(a, "root");
  let context = property_get(a, "context");
  let on_keydowns = property_get(context, "on_keydowns");
  let app_a_function_on_keydown = property_get(a, "app_a_function_on_keydown");
  list_remove(on_keydowns, app_a_function_on_keydown);
  list_add(on_keydowns, lambda$e);
  let overlay = html_overlay_z_max(root);
  function overlay_close() {
    list_add(on_keydowns, app_a_function_on_keydown);
    list_remove(on_keydowns, lambda$e);
    html_remove(overlay);
  }
  let o = {
    overlay,
    overlay_close,
  };
  return o;
}

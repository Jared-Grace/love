import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_a_function_on_change(o2, a) {
  marker("1");
  let context = object_property_get(a, "context");
  let rename_overlay_close = object_property_get(o2, "overlay_close");
  rename_overlay_close();
  app_a_function_on_keydown_remove(a);
  await app_a_function(context);
}

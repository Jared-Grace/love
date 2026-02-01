import { app_a_function_refresh_scroll } from "../../../love/public/src/app_a_function_refresh_scroll.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_a_function_overlay_refresh(a, o) {
  let context = object_property_get(a, "context");
  let overlay_close = object_property_get(o, "overlay_close");
  overlay_close();
  app_a_function_on_keydown_remove(a);
  let content = object_property_get(a, "content");
  await app_a_function_refresh_scroll(content, context);
}

import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_a_function_on_change(o, a) {
  marker("1");
  let parsed = object_property_get(a, "parsed");
  await file_js_unparse(parsed);
  let context = object_property_get(a, "context");
  let overlay_close = object_property_get(o, "overlay_close");
  overlay_close();
  app_a_function_on_keydown_remove(a);
  let content = object_property_get(a, "content");
  hecg;
  await app_a_function(context);
}

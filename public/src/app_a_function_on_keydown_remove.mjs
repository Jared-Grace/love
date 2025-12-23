import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_on_keydown_remove(a) {
  let context = object_property_get(a, "context");
  let on_keydowns = object_property_get(context, "on_keydowns");
  let app_a_function_on_keydown = object_property_get(
    a,
    "app_a_function_on_keydown",
  );
  list_remove(on_keydowns, app_a_function_on_keydown);
}

import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_on_keydown_add(context, app_a_function_on_keydown) {
  let on_keydowns = object_property_get(context, "on_keydowns");
  list_add(on_keydowns, app_a_function_on_keydown);
  return on_keydowns;
}

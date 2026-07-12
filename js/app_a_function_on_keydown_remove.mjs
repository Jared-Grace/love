import { list_remove } from "./list_remove.mjs";
import { property_get } from "./property_get.mjs";
export function app_a_function_on_keydown_remove(a) {
  let context = property_get(a, "context");
  let on_keydowns = property_get(context, "on_keydowns");
  let app_a_function_on_keydown = property_get(a, "app_a_function_on_keydown");
  list_remove(on_keydowns, app_a_function_on_keydown);
}

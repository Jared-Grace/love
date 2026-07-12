import { list_remove } from "./list_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_fn } from "./property_get_fn.mjs";
import { on_keydowns_key } from "./on_keydowns_key.mjs";
export function app_a_function_on_keydown_remove(a) {
  let context = property_get(a, "context");
  let on_keydowns = property_get_fn(context, on_keydowns_key);
  let app_a_function_on_keydown = property_get(a, "app_a_function_on_keydown");
  list_remove(on_keydowns, app_a_function_on_keydown);
}

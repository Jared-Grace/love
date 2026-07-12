import { list_add } from "./list_add.mjs";
import { property_get_fn } from "./property_get_fn.mjs";
import { on_keydowns_key } from "./on_keydowns_key.mjs";
export function app_a_on_keydown_add(context, app_a_function_on_keydown) {
  let on_keydowns = property_get_fn(context, on_keydowns_key);
  list_add(on_keydowns, app_a_function_on_keydown);
  return on_keydowns;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_reply_typed_get(typed_held) {
  arguments_assert(arguments, 1);
  let typed_get = function lambda15() {
    let value = property_get(typed_held, "typed");
    return value;
  };
  return typed_get;
}

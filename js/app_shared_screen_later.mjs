import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export function app_shared_screen_later(context, fn) {
  arguments_assert(arguments, 2);
  let r = function app_shared_screen_set_fn_inner() {
    app_shared_screen_set(context, fn);
  };
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { list_remove } from "./list_remove.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export function app_a_function_screen_choose(
  screen,
  on_keydowns,
  app_a_function_on_keydown,
  context,
) {
  arguments_assert(arguments, 4);
  let f = async function screen_choose_inner() {
    list_remove(on_keydowns, app_a_function_on_keydown);
    await sleep_0();
    await app_shared_screen_set(context, screen);
  };
  return f;
}

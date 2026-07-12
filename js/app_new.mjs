import { app_update } from "./app_update.mjs";
import { app_new_fn_latest } from "./app_new_fn_latest.mjs";
import { app_new_fn_main } from "./app_new_fn_main.mjs";
import { text_and_empty_not_is_assert } from "./text_and_empty_not_is_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_new_fn } from "./app_new_fn.mjs";
export async function app_new(name) {
  arguments_assert(arguments, 1);
  text_and_empty_not_is_assert(name);
  await app_new_fn(name);
  await app_new_fn_main(name);
  await app_new_fn_latest(name);
  await app_update(name);
}

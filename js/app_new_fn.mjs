import { text_and_empty_not_is_assert } from "./text_and_empty_not_is_assert.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
export async function app_new_fn(name) {
  text_and_empty_not_is_assert(name);
  let a_name = app_shared_name_prefixed(name);
  await function_new_open(a_name);
}

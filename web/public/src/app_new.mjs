import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { app_new_fn } from "../../../love/public/src/app_new_fn.mjs";
import { app_new_step_2_next } from "../../../love/public/src/app_new_step_2_next.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new(name) {
  assert_arguments(arguments, 1);
  string_and_empty_not_is_assert(name);
  marker("1");
  await app_new_fn(name);
  await app_new_step_2_next(name);
}

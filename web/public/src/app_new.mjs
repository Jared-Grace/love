import { function_new } from "../../../love/public/src/function_new.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { app_new_step_2_next } from "../../../love/public/src/app_new_step_2_next.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new(name) {
  assert_arguments(arguments, 1);
  string_and_empty_not_is_assert(name);
  marker("1");
  marker("1");
  string_and_empty_not_is_assert(name);
  let a_name = app_name_prefixed(name);
  await function_new(a_name);
  await app_new_step_2_next(name);
}

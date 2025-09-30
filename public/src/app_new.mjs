import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
import { string_empty_not_is_assert } from "../../../love/public/src/string_empty_not_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { app_new_step_1 } from "../../../love/public/src/app_new_step_1.mjs";
import { app_new_step_2 } from "../../../love/public/src/app_new_step_2.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new(name) {
  assert_arguments(arguments, 1);
  string_is_assert(value);
  string_empty_not_is_assert(name);
  marker("1");
  await app_new_step_1(name);
  await app_new_step_2(name);
}

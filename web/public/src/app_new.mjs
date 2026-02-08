import { app_update } from "../../../love/public/src/app_update.mjs";
import { app_new_fn_latest } from "../../../love/public/src/app_new_fn_latest.mjs";
import { app_new_fn_main } from "../../../love/public/src/app_new_fn_main.mjs";
import { text_and_empty_not_is_assert } from "../../../love/public/src/text_and_empty_not_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { app_new_fn } from "../../../love/public/src/app_new_fn.mjs";
export async function app_new(name) {
  assert_arguments(arguments, 1);
  text_and_empty_not_is_assert(name);
  await app_new_fn(name);
  await app_new_fn_main(name);
  await app_new_fn_latest(name);
  await app_update(name);
}

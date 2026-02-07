import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { app_shared_name_main } from "../../../love/public/src/app_shared_name_main.mjs";
export async function app_new_fn_main(name) {
  string_and_empty_not_is_assert(name);
  let combined = app_shared_name_main(name);
  await function_new(combined);
}

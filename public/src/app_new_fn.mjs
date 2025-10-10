import { marker } from "../../../love/public/src/marker.mjs";
import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
export async function app_new_fn(name) {
  marker("1");
  string_and_empty_not_is_assert(name);
  let a_name = app_name_prefixed(name);
  await function_new(a_name);
}

import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function app_shared_new_fn_main(name) {
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  let combined = await app_shared_name_main(name);
  let v = await function_unalias_exists(combined);
  let exists = property_get(v, "exists");
  if (not(exists)) {
    await function_new_open(combined);
  }
}

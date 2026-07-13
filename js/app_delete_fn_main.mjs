import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { app_shared_name_main_full } from "./app_shared_name_main_full.mjs";
export async function app_delete_fn_main(name) {
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  let combined = app_shared_name_main_full(name);
  await function_delete_if_exists(combined);
}

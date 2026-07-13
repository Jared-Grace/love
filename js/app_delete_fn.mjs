import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
import { function_delete } from "./function_delete.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
export async function app_delete_fn(name) {
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  let a_name = app_shared_name_prefixed(name);
  await function_delete(a_name);
}

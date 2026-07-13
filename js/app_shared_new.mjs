import { app_apps_all_main_fns_generate } from "../../love/js/app_apps_all_main_fns_generate.mjs";
import { app_update } from "../../love/js/app_update.mjs";
import { app_new_fn_latest } from "../../love/js/app_new_fn_latest.mjs";
import { app_new_fn_main } from "../../love/js/app_new_fn_main.mjs";
import { text_and_empty_not_is_assert_json } from "../../love/js/text_and_empty_not_is_assert_json.mjs";
import { arguments_assert } from "../../love/js/arguments_assert.mjs";
import { app_new_fn } from "../../love/js/app_new_fn.mjs";
export async function app_shared_new(name) {
  arguments_assert(arguments, 1);
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  await app_new_fn(name);
  await app_new_fn_main(name);
  await app_new_fn_latest(name);
  await app_update(name);
  await app_apps_all_main_fns_generate();
}

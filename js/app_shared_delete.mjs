import { app_shared_delete_confirm } from "../../love/js/app_shared_delete_confirm.mjs";
import { app_shared_delete_files } from "../../love/js/app_shared_delete_files.mjs";
import { app_shared_delete_fn } from "../../love/js/app_shared_delete_fn.mjs";
import { app_shared_delete_fn_main } from "../../love/js/app_shared_delete_fn_main.mjs";
import { app_shared_delete_fn_latest } from "../../love/js/app_shared_delete_fn_latest.mjs";
import { text_and_empty_not_is_assert_json } from "../../love/js/text_and_empty_not_is_assert_json.mjs";
import { arguments_assert } from "../../love/js/arguments_assert.mjs";
import { app_apps_all_main_fns_generate } from "../../love/js/app_apps_all_main_fns_generate.mjs";
import { app_frozen_assert } from "../../love/js/app_frozen_assert.mjs";
import { not } from "../../love/js/not.mjs";
export async function app_shared_delete(name) {
  arguments_assert(arguments, 1);
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  app_frozen_assert(name);
  let confirmed = await app_shared_delete_confirm(name);
  if (not(confirmed)) {
    return "No worries — nothing was deleted. Your app is safe and sound.";
  }
  await app_shared_delete_files(name);
  await app_shared_delete_fn_main(name);
  await app_shared_delete_fn(name);
  await app_shared_delete_fn_latest(name);
  await app_apps_all_main_fns_generate();
}

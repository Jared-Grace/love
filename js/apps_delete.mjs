import { app_apps_all_main_fns_generate } from "./app_apps_all_main_fns_generate.mjs";
import { apps_delete_confirm } from "./apps_delete_confirm.mjs";
import { apps_delete_files } from "./apps_delete_files.mjs";
import { apps_delete_fn } from "./apps_delete_fn.mjs";
import { apps_delete_fn_main } from "./apps_delete_fn_main.mjs";
import { apps_delete_fn_latest } from "./apps_delete_fn_latest.mjs";
import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_frozen_assert } from "./app_shared_frozen_assert.mjs";
import { not } from "./not.mjs";
export async function apps_delete(name) {
  arguments_assert(arguments, 1);
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  app_shared_frozen_assert(name);
  let confirmed = await apps_delete_confirm(name);
  if (not(confirmed)) {
    let r = "No worries — nothing was deleted. Your app is safe and sound.";
    return r;
  }
  await apps_delete_files(name);
  await apps_delete_fn_main(name);
  await apps_delete_fn(name);
  await apps_delete_fn_latest(name);
  await app_apps_all_main_fns_generate();
}

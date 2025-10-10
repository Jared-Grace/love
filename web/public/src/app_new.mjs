import { html_app_update } from "../../../karate_code/public/src/html_app_update.mjs";
import { app_new_staging_update } from "../../../love/public/src/app_new_staging_update.mjs";
import { app_new_production_update } from "../../../love/public/src/app_new_production_update.mjs";
import { app_new_step_4 } from "../../../love/public/src/app_new_step_4.mjs";
import { app_new_step_2 } from "../../../love/public/src/app_new_step_2.mjs";
import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { app_new_fn } from "../../../love/public/src/app_new_fn.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new(name) {
  assert_arguments(arguments, 1);
  string_and_empty_not_is_assert(name);
  marker("1");
  await app_new_fn(name);
  await app_new_step_2(name);
  await app_new_step_4(name);
  await app_new_production_update(name);
  await app_new_staging_update(name);
  await html_app_update(name);
  html_update;
}

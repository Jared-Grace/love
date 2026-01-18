import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { app_generic_name_main } from "../../../love/public/src/app_generic_name_main.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_a_app_selected_key } from "../../../love/public/src/app_a_app_selected_key.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_app(context) {
  marker("1");
  let root = html_clear_context(context);
  let key = app_a_app_selected_key();
  let a_name = storage_local_get_context(context, key);
  let combined = app_generic_name_main(a_name);
  let u = await function_exists(combined);
  let component = app_a_button_wide(parent, text, function lambda2() {});
  if (false) {
  }
  log({
    a_name,
  });
}

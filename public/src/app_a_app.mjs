import { emoji_run } from "../../../love/public/src/emoji_run.mjs";
import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
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
  app_a_button_function(context);
  let root = html_clear_context(context);
  function lambda3() {
    app_generic_screen_set(context, app_a_app_run);
  }
  let e = emoji_run();
  let a_name = storage_local_get_context(context, key);
  let component2 = app_a_button_wide(root, e + "Run: " + a_name, lambda3);
  let key = app_a_app_selected_key();
  let combined = app_generic_name_main(a_name);
  let v = await function_exists(combined);
  let unaliased = object_property_get(v, "unaliased");
  let exists = object_property_get(v, "exists");
  if (exists) {
    function lambda2() {}
    let component = app_a_button_wide(root, unaliased, lambda2);
  }
  log({
    a_name,
  });
}

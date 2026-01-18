import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { app_a_buttons_shortcuts_wide } from "../../../love/public/src/app_a_buttons_shortcuts_wide.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { app_a_function_name_selected } from "../../../love/public/src/app_a_function_name_selected.mjs";
import { app_a_button_function_text } from "../../../love/public/src/app_a_button_function_text.mjs";
import { emoji_mobile } from "../../../love/public/src/emoji_mobile.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { app_generic_name_main } from "../../../love/public/src/app_generic_name_main.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_a_app_selected_key } from "../../../love/public/src/app_a_app_selected_key.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_app(context) {
  marker("1");
  let root = html_clear_context(context);
  let f = app_a_button_function(context);
  html_width_full(f);
  function lambda3() {
    app_generic_screen_set(context, app_a_app_run);
  }
  let e = emoji_mobile();
  let key = app_a_app_selected_key();
  let a_name = storage_local_get_context(context, key);
  let component2 = app_a_button_wide(root, e + "preview: " + a_name, lambda3);
  let f_name = app_a_function_name_selected(context);
  let combined = app_generic_name_main(a_name);
  if (equal_not(f_name, combined)) {
    let v = await function_exists(combined);
    let unaliased = object_property_get(v, "unaliased");
    let exists = object_property_get(v, "exists");
    if (exists) {
      function lambda2() {
        app_a_function_select(context, unaliased);
      }
      const text = app_a_button_function_text(unaliased);
      let component = app_a_button_wide(root, text, lambda2);
    }
  }
  let choices = [
    {
      shortcut: "c",
      text: "Copy",
      fn: async function lambda2() {
        await clipboard_copy(name);
        overlay_close();
      },
    },
  ];
  app_a_buttons_shortcuts_wide(root, choices);
}

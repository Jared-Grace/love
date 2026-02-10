import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_buttons_shortcuts_wide } from "../../../love/public/src/app_a_buttons_shortcuts_wide.mjs";
import { app_a_function_name_selected } from "../../../love/public/src/app_a_function_name_selected.mjs";
import { app_a_button_function_text } from "../../../love/public/src/app_a_button_function_text.mjs";
import { emoji_mobile } from "../../../love/public/src/emoji_mobile.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { app_shared_name_main } from "../../../love/public/src/app_shared_name_main.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_a_app_selected_key } from "../../../love/public/src/app_a_app_selected_key.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export async function app_a_app(context) {
  let root = html_clear_context(context);
  let e = emoji_mobile();
  let key = app_a_app_selected_key();
  let a_name = storage_local_get_context(context, key);
  let f_name = app_a_function_name_selected(context);
  let a_name_f = app_shared_name_prefixed(a_name);
  let combined = app_shared_name_main(a_name);
  let v = await function_unalias_exists(combined);
  let unaliased = property_get(v, "unaliased");
  let choices = [
    {
      shortcut: "f",
      text: app_a_button_function_text(a_name_f),
      fn: function lambda2() {
        app_a_function_select(context, a_name_f);
      },
    },
    {
      shortcut: "p",
      text: e + " Preview",
      fn: function lambda3() {
        app_shared_screen_set(context, app_a_app_run);
      },
    },
  ];
  let exists = property_get(v, "exists");
  if (exists) {
    list_add(choices, {
      shortcut: "m",
      text: app_a_button_function_text(unaliased),
      fn: function lambda2() {
        app_a_function_select(context, unaliased);
      },
    });
  }
  function on_keydown(e) {
    app_a_on_keydown(e, choices);
  }
  function lambda(item) {
    let fn = property_get(item, "fn");
    function wrapped() {
      list_remove(on_keydowns, on_keydown);
      let result = fn();
      return result;
    }
    property_set(item, "fn", wrapped);
  }
  each(choices, lambda);
  let on_keydowns = property_get(context, "on_keydowns");
  list_add(on_keydowns, on_keydown);
  app_a_buttons_shortcuts_wide(root, choices);
}

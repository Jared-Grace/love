import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { property_set } from "./property_set.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { app_a_buttons_shortcuts_wide } from "./app_a_buttons_shortcuts_wide.mjs";
import { app_a_function_name_selected } from "./app_a_function_name_selected.mjs";
import { app_a_button_function_text } from "./app_a_button_function_text.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { app_a_function_select } from "./app_a_function_select.mjs";
import { app_a_app_run } from "./app_a_app_run.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_fn } from "./property_get_fn.mjs";
import { on_keydowns_key } from "./on_keydowns_key.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_a_app_selected_key } from "./app_a_app_selected_key.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_a_app(context) {
  let root = html_clear_context(context);
  let e = emoji_mobile();
  let key = app_a_app_selected_key();
  let a_name = storage_local_get_context(context, key);
  let f_name = app_a_function_name_selected(context);
  let a_name_f = app_shared_name_prefixed(a_name);
  let combined = await app_shared_name_main(a_name);
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
      text: text_combine(e, " Preview"),
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
  let on_keydowns = property_get_fn(context, on_keydowns_key);
  list_add(on_keydowns, on_keydown);
  app_a_buttons_shortcuts_wide(root, choices);
}

import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { storage_session_exists } from "./storage_session_exists.mjs";
import { app_a } from "./app_a.mjs";
import { list_add } from "./list_add.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { function_delete } from "./function_delete.mjs";
import { app_a_buttons_shortcuts } from "./app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
export function app_a_function_e(r, key) {
  arguments_assert(arguments, 2);
  let choices = property_get(r, "choices");
  let screen_choose_open = property_get(r, "screen_choose_open");
  let preview_app = property_get(r, "preview_app");
  let bar = property_get(r, "bar");
  let content = property_get(r, "content");
  let root = property_get(r, "root");
  let ast = property_get(r, "ast");
  let parsed = property_get(r, "parsed");
  let f_name = property_get(r, "f_name");
  let selected_exists = storage_session_exists(app_a, key);
  if (selected_exists) {
    list_add(choices, preview_app);
  }
  list_add(choices, {
    shortcut: "d",
    text: emoji_x_red(),
    fn: async function lambda4() {
      await function_delete(f_name);
      await screen_choose_open();
    },
  });
  app_a_buttons_shortcuts(bar, choices);
  function app_a_function_on_keydown(e) {
    app_a_on_keydown(e, choices);
  }
  let r2 = {
    content,
    root,
    ast,
    parsed,
    app_a_function_on_keydown,
  };
  return r2;
}

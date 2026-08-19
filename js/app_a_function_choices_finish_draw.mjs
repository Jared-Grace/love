import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_app_selected_key } from "./app_a_app_selected_key.mjs";
import { storage_session_exists } from "./storage_session_exists.mjs";
import { app_a } from "./app_a.mjs";
import { list_add } from "./list_add.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { function_delete } from "./function_delete.mjs";
import { app_a_buttons_shortcuts } from "./app_a_buttons_shortcuts.mjs";
export function app_a_function_choices_finish_draw(
  choices,
  preview_app,
  f_name,
  screen_choose_open,
  bar,
) {
  arguments_assert(arguments, 5);
  let key = app_a_app_selected_key();
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
}

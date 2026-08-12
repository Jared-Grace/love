import { app_code_settings } from "./app_code_settings.mjs";
import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_home_settings_gear(parent, context) {
  "the one gear on the lesson list, opening the settings screen - the same gear, in the same words, as the one the bible reader carries";
  arguments_assert(arguments, 2);
  let text = app_shared_gear_settings_text();
  let button = app_shared_screen_set_button(
    parent,
    context,
    app_code_settings,
    text,
  );
  return button;
}

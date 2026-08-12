import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_code_settings } from "./app_code_settings.mjs";
import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_home_settings_gear(parent, context) {
  "the one gear on the lesson list, opening the settings screen - the same gear, in the same words, as the one the bible reader carries";
  arguments_assert(arguments, 2);
  ("a plain button, not a wide one: it rides the bar across the top rather than standing in the column of lesson rows, and a bar is a place for buttons the size of their own words");
  let text = app_shared_gear_settings_text();
  let open = app_shared_screen_later(context, app_code_settings);
  let button = app_shared_button(parent, text, open);
  return button;
}

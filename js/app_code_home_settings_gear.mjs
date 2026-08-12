import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_code_settings } from "./app_code_settings.mjs";
import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_home_settings_gear(parent, context) {
  "the one gear on the lesson list, opening the settings screen - the same gear, in the same words, as the one the bible reader carries";
  arguments_assert(arguments, 2);
  ("wide, like every other button on this screen - the lesson list is a column of full-width rows, and a small button at the top of it reads as something that fell off another page");
  let text = app_shared_gear_settings_text();
  let open = app_shared_screen_later(context, app_code_settings);
  let button = app_shared_button_wide(parent, text, open);
  return button;
}

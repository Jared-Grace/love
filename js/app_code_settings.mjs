import { app_code_home } from "./app_code_home.mjs";
import { app_code_screen_capped } from "./app_code_screen_capped.mjs";
import { app_code_settings_clear_confirm } from "./app_code_settings_clear_confirm.mjs";
import { app_code_settings_complete_confirm } from "./app_code_settings_complete_confirm.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_settings(context) {
  "the gear on the lesson list opens this: the settings every app offers, plus the two things only this app can be asked - to call every lesson finished, and to forget that any of them were. It is laid out like the bible and replace settings so a learner who has met one has met them all";
  "Both of those two ask before they act, and each asks on a screen of its own, so what stands here is a plain list of choices with nothing that grows a question inside it and moves the rest of the list down the page.";
  arguments_assert(arguments, 1);
  let g = app_code_screen_capped(context);
  let text_home = app_shared_button_home_text();
  app_shared_screen_set_button(g, context, app_code_home, text_home);
  app_shared_font_size_buttons(g, context);
  let check = emoji_check();
  let combined = text_combine(check, " Mark all lessons complete");
  app_shared_screen_set_button(
    g,
    context,
    app_code_settings_complete_confirm,
    combined,
  );
  let cross = emoji_x_red();
  let combined2 = text_combine(cross, " Mark all lessons incomplete");
  app_shared_screen_set_button(
    g,
    context,
    app_code_settings_clear_confirm,
    combined2,
  );
}

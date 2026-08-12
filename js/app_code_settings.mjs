import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_code_progress_all_complete_mark } from "./app_code_progress_all_complete_mark.mjs";
import { app_shared_button_confirm } from "./app_shared_button_confirm.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_code_settings(context) {
  "the gear on the lesson list opens this: the settings every app offers, plus the one thing only this app can be asked - to call every lesson finished. It is laid out like the bible and replace settings so a learner who has met one has met them all";
  arguments_assert(arguments, 1);
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  let text_home = app_shared_button_home_text();
  app_shared_screen_set_button(g, context, app_code_home, text_home);
  app_shared_font_size_buttons(g, context);
  async function on_confirm() {
    "go back to the list as soon as it is done - every row turning green is the whole answer, and no other message says it as plainly";
    app_code_progress_all_complete_mark(context);
    await app_shared_screen_set(context, app_code_home);
  }
  let check = emoji_check();
  let text = text_combine(check, " Mark all lessons complete");
  let question =
    "Mark every lesson as complete? Everything you have already answered is kept, and you can still open any lesson you like.";
  let text_confirm = text_combine(check, " Yes, mark them all complete");
  app_shared_button_confirm(g, text, question, text_confirm, on_confirm);
}

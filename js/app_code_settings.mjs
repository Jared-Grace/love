import { app_code_content_cap } from "./app_code_content_cap.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_code_progress_all_clear } from "./app_code_progress_all_clear.mjs";
import { app_code_progress_all_complete_mark } from "./app_code_progress_all_complete_mark.mjs";
import { app_shared_button_confirm } from "./app_shared_button_confirm.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_code_settings(context) {
  "the gear on the lesson list opens this: the settings every app offers, plus the two things only this app can be asked - to call every lesson finished, and to forget that any of them were. It is laid out like the bible and replace settings so a learner who has met one has met them all";
  arguments_assert(arguments, 1);
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  ("cap it to the same column the lessons are listed in, so the question below reads at the width everything else on this app is read at rather than running the full width of a desktop window");
  app_code_content_cap(g);
  let text_home = app_shared_button_home_text();
  app_shared_screen_set_button(g, context, app_code_home, text_home);
  app_shared_font_size_buttons(g, context);
  function progress_button(text, question, text_confirm, change) {
    "both of the things this screen can do to a learner's record have the same shape - ask, then change the record, then go straight back to the list, where the rows themselves are the whole answer and no message says it as plainly";
    async function on_confirm() {
      change(context);
      await app_shared_screen_set(context, app_code_home);
    }
    app_shared_button_confirm(g, text, question, text_confirm, on_confirm);
  }
  let check = emoji_check();
  let combined = text_combine(check, " Mark all lessons complete");
  let combined2 = text_combine(check, " Yes, mark them all complete");
  progress_button(
    combined,
    "Mark every lesson as complete? Everything you have already answered is kept, and you can still open any lesson you like.",
    combined2,
    app_code_progress_all_complete_mark,
  );
  let cross = emoji_x_red();
  let combined3 = text_combine(cross, " Clear all progress");
  let combined4 = text_combine(cross, " Yes, clear my progress");
  progress_button(
    combined3,
    "Forget everything you have answered? The lesson list goes back to how it looked on your first day, and every lesson is yours to do again. Nothing else on this device is touched.",
    combined4,
    app_code_progress_all_clear,
  );
}

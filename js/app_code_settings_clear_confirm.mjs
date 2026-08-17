import { app_code_home } from "./app_code_home.mjs";
import { app_code_progress_all_clear } from "./app_code_progress_all_clear.mjs";
import { app_code_screen_capped } from "./app_code_screen_capped.mjs";
import { app_code_settings } from "./app_code_settings.mjs";
import { app_shared_confirm_red } from "./app_shared_confirm_red.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_settings_clear_confirm(context) {
  "the screen that asks before forgetting which lessons a learner has finished; saying yes goes straight back to the list, where the rows themselves are the whole answer and no message says it as plainly";
  arguments_assert(arguments, 1);
  let g = app_code_screen_capped(context);
  let cross = emoji_x_red();
  let text_confirm = text_combine(cross, " Yes, mark lessons incomplete");
  async function on_confirm() {
    app_code_progress_all_clear(context);
    await app_shared_screen_set(context, app_code_home);
  }
  app_shared_confirm_red(
    g,
    context,
    app_code_settings,
    "Are you sure you want to mark all lessons as incomplete? The lesson list goes back to how it looked on your first day, and every lesson is yours to complete again. This only affects whether or not you've completed the lessons.",
    text_confirm,
    on_confirm,
  );
}

import { app_code_home } from "./app_code_home.mjs";
import { app_code_progress_all_complete_mark } from "./app_code_progress_all_complete_mark.mjs";
import { app_code_screen_capped } from "./app_code_screen_capped.mjs";
import { app_code_settings } from "./app_code_settings.mjs";
import { app_shared_confirm } from "./app_shared_confirm.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_settings_complete_confirm(context) {
  "the screen that asks before calling every lesson finished; saying yes goes straight back to the list, where the rows themselves are the whole answer and no message says it as plainly";
  arguments_assert(arguments, 1);
  let g = app_code_screen_capped(context);
  let check = emoji_check();
  let text_confirm = text_combine(check, " Yes, mark lessons complete");
  async function on_confirm() {
    app_code_progress_all_complete_mark(context);
    await app_shared_screen_set(context, app_code_home);
  }
  app_shared_confirm(
    g,
    context,
    app_code_settings,
    "Are you sure you want to mark every lesson as complete? You can still open any completed lesson you like.",
    text_confirm,
    on_confirm,
  );
}

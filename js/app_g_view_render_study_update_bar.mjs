import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_g_progress_bar } from "./app_g_progress_bar.mjs";
export function app_g_view_render_study_update_bar(bar_div, current, words) {
  arguments_assert(arguments, 3);
  html_clear(bar_div);
  app_g_progress_bar(bar_div, current, words.length, "word");
}

import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { app_g_view_render_study_style_completed } from "./app_g_view_render_study_style_completed.mjs";
import { equal } from "./equal.mjs";
import { app_g_view_render_study_style_next } from "./app_g_view_render_study_style_next.mjs";
import { app_g_view_render_study_style_upcoming } from "./app_g_view_render_study_style_upcoming.mjs";
export function app_g_view_render_study_style_word(i, word_bs, current) {
  arguments_assert(arguments, 3);
  let b = word_bs[i];
  if (less_than(i, current)) {
    app_g_view_render_study_style_completed(b);
  } else if (equal(i, current)) {
    app_g_view_render_study_style_next(b);
  } else {
    app_g_view_render_study_style_upcoming(b);
  }
}

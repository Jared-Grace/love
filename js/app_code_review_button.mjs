import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_milestone_background_color } from "./app_shared_milestone_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
export function app_code_review_button(parent, label, on_click, complete) {
  "$plain complete";
  "a milestone-styled review checkpoint button, distinct from the lesson buttons - and painted as finished once the learner has been all the way through it";
  "A finished one takes the same green a finished lesson takes and wears the same check, so one glance down the list reads the same whichever kind of row it lands on. What it does NOT keep is the white words: those are there to be read against the deep blue, and white on that green cannot be read at all.";
  "Both looks are chosen here rather than painted over from outside, because there is one place that knows what a review button is and a caller reaching in to repaint half of it is a caller that has to be told every time the other half changes.";
  arguments_assert(arguments, 4);
  let prefix = "Review ";
  if (complete) {
    let check = emoji_check();
    prefix = text_combine(check, " Review ");
  }
  let b = app_shared_button_wide_text_combine(parent, prefix, label, on_click);
  html_centered(b);
  if (complete) {
    let done = app_shared_color_progress_complete();
    html_style_background_color_set(b, done);
    return b;
  }
  let background = app_shared_milestone_background_color();
  html_style_background_color_set(b, background);
  let color = app_shared_button_font_color();
  html_font_color_set(b, color);
  return b;
}

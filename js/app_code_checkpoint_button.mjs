import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_milestone_background_color } from "./app_shared_milestone_background_color.mjs";
import { app_shared_milestone_complete_background_color } from "./app_shared_milestone_complete_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_checkpoint_button(
  parent,
  prefix,
  label,
  on_click,
  complete,
) {
  "$plain complete";
  "a milestone-styled checkpoint button, distinct from the lesson buttons - and painted as finished once the learner has been all the way through it. prefix is the word naming its kind, written before its label: a review, or a milestone";
  "A finished one turns green and wears the same check a finished lesson wears, so one glance down the list reads the same whichever kind of row it lands on. It is a DEEP green rather than the lesson's light one, standing to that light green exactly as its own deep blue stands to the pale blue of a lesson not yet reached - so the row keeps saying milestone while it says finished. Deep both ways means the white words stay white both ways.";
  "Both looks are chosen here rather than painted over from outside, because there is one place that knows what a checkpoint button is and a caller reaching in to repaint half of it is a caller that has to be told every time the other half changes.";
  arguments_assert(arguments, 5);
  let words = prefix;
  if (complete) {
    let check = emoji_check();
    let check_space = text_combine(check, " ");
    words = text_combine(check_space, prefix);
  }
  let b = app_shared_button_wide_text_combine(parent, words, label, on_click);
  html_centered(b);
  let background = app_shared_milestone_background_color();
  if (complete) {
    background = app_shared_milestone_complete_background_color();
  }
  html_style_background_color_set(b, background);
  let color = app_shared_button_font_color();
  html_font_color_set(b, color);
  return b;
}

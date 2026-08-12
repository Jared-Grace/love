import { app_shared_color_progress_complete } from "./app_shared_color_progress_complete.mjs";
import { app_shared_color_progress_later } from "./app_shared_color_progress_later.mjs";
import { app_shared_text_colors_on_dark_set } from "./app_shared_text_colors_on_dark_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_numbered } from "./app_shared_button_numbered.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_color_progress_next } from "./app_shared_color_progress_next.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { emoji_point_right } from "./emoji_point_right.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { not } from "./not.mjs";
export function app_shared_button_numbered_progress(
  root,
  completed,
  completed_previous,
  index,
  lambda,
) {
  "a numbered list row that says where the learner is: a check and green once it is finished, a pointing hand and the strong colour on the first unfinished row whose predecessor is finished, and the quiet colour on everything else. Shared, so every app's list of things to work through reads the same way";
  "It hands back everything the plain numbered button did rather than the title alone. A caller that has more to do to the row - a gap above it, holding on to it to scroll back to it later - was otherwise left unable to reach the button it had just made, and would have had to build its own row and lose all of this.";
  let choose_this_next = not(completed) && completed_previous;
  let r = app_shared_button_numbered(root, index, lambda, true);
  let marker_slot = property_get(r, "marker");
  let button = property_get(r, "button");
  if (completed) {
    let e = emoji_check();
    html_span_text(marker_slot, e);
  } else {
    if (choose_this_next) {
      let e = emoji_point_right();
      html_span_text(marker_slot, e);
    }
  }
  if (completed) {
    let done = app_shared_color_progress_complete();
    html_style_background_color_set(button, done);
  } else {
    if (choose_this_next) {
      let blue_strong = app_shared_color_progress_next();
      html_style_background_color_set(button, blue_strong);
      let white = app_shared_button_font_color();
      html_font_color_set(button, white);
      ("the title is painted into this row after this returns, and the quieter words in it - the category, the number - paint themselves their own dark colours, which on this one background are the background. So the row says here what those should be instead, and each word reads it when it is drawn");
      app_shared_text_colors_on_dark_set(button);
    } else {
      let later = app_shared_color_progress_later();
      html_style_background_color_set(button, later);
    }
  }
  return r;
}

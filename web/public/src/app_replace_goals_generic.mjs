import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_button_wide_text_left_centered } from "../../../love/public/src/app_replace_button_wide_text_left_centered.mjs";
import { add_1_period } from "../../../love/public/src/add_1_period.mjs";
import { html_style_background_color_set_if } from "../../../love/public/src/html_style_background_color_set_if.mjs";
import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { emoji_point_right } from "../../../love/public/src/emoji_point_right.mjs";
import { string_pad_left_space } from "../../../love/public/src/string_pad_left_space.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function app_replace_goals_generic(
  root,
  completed,
  completed_previous,
  index,
  lambda,
) {
  const choose_this_next = not(completed) && completed_previous;
  let text_left = add_1_period(index);
  if (completed) {
    let e = emoji_check();
    text_left += string_pad_left_space(e);
  } else {
    if (choose_this_next) {
      let e = emoji_point_right();
      text_left += string_pad_left_space(e);
    }
  }
  const text_centered = "";
  let r = app_replace_button_wide_text_left_centered(
    root,
    lambda,
    text_left,
    text_centered,
  );
  let title = property_get(r, "title");
  let button = property_get(r, "button");
  let background = app_replace_rule_set_highlight();
  html_style_background_color_set_if(choose_this_next, button, background);
  return title;
}

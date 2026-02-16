import { html_style_background_color_set_if } from "../../../love/public/src/html_style_background_color_set_if.mjs";
import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_style_text_left_centered } from "../../../love/public/src/html_style_text_left_centered.mjs";
import { app_replace_button_rule_style } from "../../../love/public/src/app_replace_button_rule_style.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { emoji_point_right } from "../../../love/public/src/emoji_point_right.mjs";
import { string_pad_left_space } from "../../../love/public/src/string_pad_left_space.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function app_replace_goals_generic(
  completed,
  completed_previous,
  index,
  root,
  lambda,
) {
  const choose_this_next = not(completed) && completed_previous;
  let text = add_1(index) + ".";
  if (completed) {
    let e = emoji_check();
    text += string_pad_left_space(e);
  } else {
    if (choose_this_next) {
      let e = emoji_point_right();
      text += string_pad_left_space(e);
    }
  }
  let b = app_replace_button_wide(root, "", lambda);
  app_replace_button_rule_style(b);
  let r = html_style_text_left_centered(b, text, "");
  let title = property_get(r, "title");
  html_style_set(title, "line-height", 1.5);
  let background = app_replace_rule_set_highlight();
  html_style_background_color_set_if(choose_this_next, b, background);
  return title;
}

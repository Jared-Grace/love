import { property_get } from "./property_get.mjs";
import { app_replace_button_wide_text_left_centered } from "./app_replace_button_wide_text_left_centered.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_replace_rule_set_highlight } from "./app_replace_rule_set_highlight.mjs";
import { app_shared_button_selected_background_color } from "./app_shared_button_selected_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { emoji_point_right } from "./emoji_point_right.mjs";
import { string_pad_left_space } from "./string_pad_left_space.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { not } from "./not.mjs";
export function app_replace_goals_generic(
  root,
  completed,
  completed_previous,
  index,
  lambda,
) {
  let choose_this_next = not(completed) && completed_previous;
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
  let text_centered = "";
  let r = app_replace_button_wide_text_left_centered(
    root,
    lambda,
    text_left,
    text_centered,
  );
  let title = property_get(r, "title");
  let button = property_get(r, "button");
  if (completed) {
    let green = app_replace_rule_set_highlight();
    html_style_background_color_set(button, green);
  } else {
    if (choose_this_next) {
      let blue_strong = app_shared_button_selected_background_color();
      html_style_background_color_set(button, blue_strong);
      let white = app_shared_button_font_color();
      html_font_color_set(button, white);
    } else {
      let blue_light = app_shared_container_blue_border_color();
      html_style_background_color_set(button, blue_light);
    }
  }
  return title;
}

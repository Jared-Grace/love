import { property_get } from "../../love/js/property_get.mjs";
import { app_shared_button_numbered } from "../../love/js/app_shared_button_numbered.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { app_shared_color_light_green } from "../../love/js/app_shared_color_light_green.mjs";
import { app_replace_button_rule_selected_background_color } from "../../love/js/app_replace_button_rule_selected_background_color.mjs";
import { app_shared_button_font_color } from "../../love/js/app_shared_button_font_color.mjs";
import { app_shared_container_blue_border_color } from "../../love/js/app_shared_container_blue_border_color.mjs";
import { emoji_point_right } from "../../love/js/emoji_point_right.mjs";
import { emoji_check } from "../../love/js/emoji_check.mjs";
import { not } from "../../love/js/not.mjs";
export function app_replace_goals_generic(
  root,
  completed,
  completed_previous,
  index,
  lambda,
) {
  let choose_this_next = not(completed) && completed_previous;
  let r = app_shared_button_numbered(root, index, lambda, true);
  let marker = property_get(r, "marker");
  let title = property_get(r, "title");
  let button = property_get(r, "button");
  if (completed) {
    let e = emoji_check();
    html_span_text(marker, e);
  } else {
    if (choose_this_next) {
      let e = emoji_point_right();
      html_span_text(marker, e);
    }
  }
  if (completed) {
    let green = app_shared_color_light_green();
    html_style_background_color_set(button, green);
  } else {
    if (choose_this_next) {
      let blue_strong = app_replace_button_rule_selected_background_color();
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

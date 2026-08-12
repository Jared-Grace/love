import { property_get } from "./property_get.mjs";
import { app_shared_button_numbered } from "./app_shared_button_numbered.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_color_light_green } from "./app_shared_color_light_green.mjs";
import { app_shared_button_progress_next_background_color } from "./app_shared_button_progress_next_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
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
  let choose_this_next = not(completed) && completed_previous;
  let r = app_shared_button_numbered(root, index, lambda, true);
  let marker_slot = property_get(r, "marker");
  let title = property_get(r, "title");
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
    let green = app_shared_color_light_green();
    html_style_background_color_set(button, green);
  } else {
    if (choose_this_next) {
      let blue_strong = app_shared_button_progress_next_background_color();
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

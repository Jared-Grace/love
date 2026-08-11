import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_view_render_study_style_next(b) {
  arguments_assert(arguments, 1);
  let left = app_shared_button_background();
  let green_vivid = text_combine(left, "ee");
  let white = app_shared_button_font_color();
  let ring = text_combine_multiple([
    "0 0 0 0.12em ",
    white,
    ", 0 0 0 0.2em #00000080",
  ]);
  html_style_assign(b, {
    "background-color": green_vivid,
    color: white,
    "font-weight": "normal",
    "box-shadow": ring,
  });
}

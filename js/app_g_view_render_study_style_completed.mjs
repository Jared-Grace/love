import { app_shared_color_blue_light } from "./app_shared_color_blue_light.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_view_render_study_style_completed(b) {
  arguments_assert(arguments, 1);
  let blue_pale = app_shared_color_blue_light();
  html_style_assign(b, {
    "background-color": blue_pale,
    color: "black",
    "font-weight": "normal",
    "box-shadow": "none",
  });
}

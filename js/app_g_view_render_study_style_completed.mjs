import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_view_render_study_style_completed(b) {
  arguments_assert(arguments, 1);
  html_style_assign(b, {
    "background-color": blue_pale,
    color: "black",
    "font-weight": "normal",
    "box-shadow": "none",
  });
}

import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_view_render_study_style_next(b) {
  arguments_assert(arguments, 1);
  html_style_assign(b, {
    "background-color": green_vivid,
    color: white,
    "font-weight": "normal",
    "box-shadow": ring,
  });
}

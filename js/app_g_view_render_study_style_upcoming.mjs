import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { text_combine } from "./text_combine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_view_render_study_style_upcoming(b) {
  arguments_assert(arguments, 1);
  let left = app_shared_button_background();
  let green_pale = text_combine(left, "66");
  html_style_assign(b, {
    "background-color": green_pale,
    color: "black",
    "font-weight": "normal",
    "box-shadow": "none",
  });
}

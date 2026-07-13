import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_tutorial_style(tutorial) {
  let square_size = text_combine_multiple([
    "calc(",
    g_img_square_size_css(),
    "*.4)",
  ]);
  html_style_assign(tutorial, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "text-align": "center",
    "font-size": square_size,
    animation: "upDown 1.25s infinite ease-in-out alternate",
  });
}

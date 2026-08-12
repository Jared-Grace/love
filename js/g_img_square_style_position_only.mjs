import { g_img_square_slide_seconds } from "./g_img_square_slide_seconds.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_img_square_style_position_only(tile, x, y) {
  let seconds = g_img_square_slide_seconds();
  let time = text_combine_multiple([seconds, "s ease"]);
  let v = g_img_square_size_css();
  let v2 = g_img_square_size_css();
  html_style_assign(tile, {
    left: text_combine_multiple(["calc(", x, " * (", v, "))"]),
    top: text_combine_multiple(["calc(", y, " * (", v2, "))"]),
    transition: text_combine_multiple(["left ", time, ", top ", time]),
  });
}

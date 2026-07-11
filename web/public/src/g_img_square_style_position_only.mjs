import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function g_img_square_style_position_only(tile, x, y) {
  let time = "0.3s ease";
  html_style_assign(tile, {
    left: text_combine_multiple([
      "calc(",
      x,
      " * (",
      g_img_square_size_css(),
      "))",
    ]),
    top: text_combine_multiple([
      "calc(",
      y,
      " * (",
      g_img_square_size_css(),
      "))",
    ]),
    transition: text_combine_multiple(["left ", time, ", top ", time]),
  });
}

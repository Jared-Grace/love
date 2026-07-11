import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function g_img_square_style(tile) {
  const square_size = text_combine_multiple([
    "calc(",
    g_img_square_size_css(),
    ")",
  ]);
  html_style_size_square(tile, square_size);
}

import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
export function g_img_square(parent, src, square_size, x, square_count, y, z) {
  let tile = html_img(parent, src);
  g_img_square_style(tile, square_size, x, square_count, y, z);
  return tile;
}

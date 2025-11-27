import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
export function g_img_square(div, src, square_size, x, square_count, y) {
  let tile = html_img(div, src);
  html_style_size_square(tile, square_size);
  html_style_assign(tile, {
    position: "absolute",
    left: x * square_count + "px",
    top: y * square_count + "px",
  });
}

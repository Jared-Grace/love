import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
export function g_img_square_style(tile, square_size, x, square_count, y) {
  html_style_size_square(tile, square_size);
  html_style_assign(tile, {
    position: "absolute",
    left: x * square_count + "px",
    top: y * square_count + "px",
  });
}

import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function g_img_square_style_position(tile, x, square_count, y) {
  html_style_assign(tile, {
    left: "calc(" + x + " * (100vh / " + rows + "))",
    top: y * square_count + "px",
  });
}

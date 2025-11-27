import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function g_img_square_style_position(tile, x, y) {rows=10
  html_style_assign(tile, {
    left: "calc(" + x + " * (100vh / " + rows + "))",
    top: "calc(" + y + " * (100vh / " + rows + "))",
  });
}

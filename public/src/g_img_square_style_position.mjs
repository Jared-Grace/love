import { log } from "../../../love/public/src/log.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function g_img_square_style_position(tile, x, y) {
  log(message);
  html_style_assign(tile, {
    left: "calc(" + x + " * (100vh / " + rows + "))",
    top: "calc(" + y + " * (100vh / " + rows + "))",
    transition: "left 0.3s ease, top 0.3s ease",
  });
}

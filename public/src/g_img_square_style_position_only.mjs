import { marker } from "../../../love/public/src/marker.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function g_img_square_style_position_only(tile, x, y) {
  marker("1");
  let rows = g_rows_count();
  html_style_assign(tile, {
    left: "calc(" + x + " * (100vh / " + rows + "))",
    top: "calc(" + y + " * (100vh / " + rows + "))",
    transition: "left 0.3s ease, top 0.3s ease",
  });
}

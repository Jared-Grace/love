import { g_z } from "../../../love/public/src/g_z.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
export function g_img_square_style(tile, x, y, z) {
  let rows = g_rows_count();
  const square_size = "calc(100vh / " + rows + ")";
  html_style_size_square(tile, square_size);
  html_style_assign(tile, {
    position: "absolute",
    "z-index": g_z(z),
  });
  g_img_square_style_position(tile, x, y);
}

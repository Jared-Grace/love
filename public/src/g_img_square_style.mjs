import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
export function g_img_square_style(tile) {
  let rows = g_rows_count();
  const square_size = `calc(max(100vh / ${rows}, 100vw / ${rows}))`;
  html_style_size_square(tile, square_size);
}

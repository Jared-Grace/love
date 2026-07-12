import { g_rows_count } from "./g_rows_count.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_img_square_size_css() {
  let rows = g_rows_count();
  let v = text_combine_multiple([
    "max(100vh / ",
    rows,
    ", 100vw / ",
    rows,
    ")",
  ]);
  return v;
}

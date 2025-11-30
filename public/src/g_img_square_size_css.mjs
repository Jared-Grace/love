import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
export function g_img_square_size_css() {
  let rows = g_rows_count();
  let v = `max(100vh / ${rows}, 100vw / ${rows})`;
  return v;
}

import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function g_img_square_style_position_only(tile, x, y) {
  marker("1");
  let rows = g_rows_count();
  const time = "0.3s ease";
  html_style_assign(tile, {
    left: "calc(" + x + ` * (` + g_img_square_size_css() + `))`,
    top: "calc(" + y + ` * (` + g_img_square_size_css() + `))`,
    transition: "left " + time + ", top " + time,
  });
}

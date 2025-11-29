import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { g_z } from "../../../love/public/src/g_z.mjs";
import { g_img_square_style_position_only } from "../../../love/public/src/g_img_square_style_position_only.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function g_img_square_style_position(tile, { x, y }, z) {
  marker("1");
  g_img_square_style(tile);
  html_style_assign(tile, {
    position: "absolute",
    "z-index": g_z(z),
  });
  g_img_square_style_position_only(tile, x, y);
}

import { g_img_square_style } from "./g_img_square_style.mjs";
import { g_z } from "./g_z.mjs";
import { g_img_square_style_position_only } from "./g_img_square_style_position_only.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function g_img_square_style_position(tile, { x, y }, z) {
  g_img_square_style(tile);
  html_style_assign(tile, {
    position: "absolute",
    "z-index": g_z(z),
  });
  g_img_square_style_position_only(tile, x, y);
}

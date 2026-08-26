import { g_img_square_layer_variable } from "./g_img_square_layer_variable.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { g_img_square_style } from "./g_img_square_style.mjs";
import { g_z } from "./g_z.mjs";
import { g_img_square_style_position_only } from "./g_img_square_style_position_only.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function g_img_square_style_position(tile, { x, y }, z) {
  g_img_square_style(tile);
  html_style_assign(tile, {
    position: "absolute",
  });
  ("The layer is written onto the square as a style variable rather than as the z-index");
  ("itself, because the z-index is worked out afresh on every step - the layer plus the row");
  ("the square has reached - and the one that does the working out is handed nothing but the");
  ("element. Written here as a plain z-index it would be wiped by the first move made.");
  let name = g_img_square_layer_variable();
  let layer = g_z(z);
  html_style_variable_set(tile, name, layer);
  g_img_square_style_position_only(tile, x, y);
}

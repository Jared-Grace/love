import { g_icon_cross_unpositioned } from "../../../love/public/src/g_icon_cross_unpositioned.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
export function g_icon_cross(div_map, coordinates) {
  let i = g_icon_cross_unpositioned(div_map);
  g_img_square_style_position(i, coordinates, "icon");
}

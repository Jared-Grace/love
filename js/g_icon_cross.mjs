import { g_icon_cross_unpositioned } from "./g_icon_cross_unpositioned.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
export function g_icon_cross(div_map, coordinates) {
  "the cross is HANDED BACK so a caller who will later move the person can move their cross with them - a cross is its own element on the map, and nothing else can find it again once this returns";
  let i = g_icon_cross_unpositioned(div_map);
  g_img_square_style_position(i, coordinates, "icon");
  return i;
}

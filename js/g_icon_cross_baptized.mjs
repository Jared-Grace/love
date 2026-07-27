import { g_icon_cross_baptized_unpositioned } from "./g_icon_cross_baptized_unpositioned.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
export function g_icon_cross_baptized(div_map, coordinates) {
  "place the BLUE baptized cross (believes + baptized) on a tile — the #day_unbelievers demo marks a person with this the instant the player reaches them, skipping the dialogue (blue = converted AND baptized in one beat)";
  let i = g_icon_cross_baptized_unpositioned(div_map);
  g_img_square_style_position(i, coordinates, "icon");
}

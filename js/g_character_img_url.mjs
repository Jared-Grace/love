import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function g_character_img_url(c) {
  let direction = property_get_or(c, "direction", "south");
  let c_src = g_character_img_url_direction(c, direction);
  return c_src;
}

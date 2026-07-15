import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
export function g_character_img_url(c) {
  let c_src = g_character_img_url_direction(c, "south");
  return c_src;
}

import { g_character_img_preload } from "./g_character_img_preload.mjs";
import { g_character_img_url } from "./g_character_img_url.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { g_img_square_style_position_object } from "./g_img_square_style_position_object.mjs";
import { g_img_square } from "./g_img_square.mjs";
export function g_character_img(parent, c) {
  let c_src = g_character_img_url(c);
  let ci = g_img_square(parent, c_src, -1, -1, "character");
  g_img_square_style_position_object(c, ci);
  html_click_none(ci);
  ("every facing is fetched as soon as the person is drawn, not only the one shown. A turn shows each in-between picture for a fraction of a second, and a picture still downloading when the next is asked for is never drawn - so a person whose other facings were not fetched ahead turns in snaps. Done here because this is where every person on every map is made, so nobody can be drawn without it.");
  g_character_img_preload(c);
  return ci;
}

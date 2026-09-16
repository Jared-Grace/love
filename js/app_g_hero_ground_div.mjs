import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_img_square_div } from "./g_img_square_div.mjs";
import { html_click_none } from "./html_click_none.mjs";
export function app_g_hero_ground_div(div_map, person) {
  arguments_assert(arguments, 2);
  ("A blank square laid on the ground where somebody is standing, for a mark that outlives them - a grave, a scorch.");
  ("It lies on the ground layer, under the people, so anybody who walks over it is drawn on top of it; and a tap goes through it to the street underneath, so a mark of what happened can never swallow the tap that walks the player there.");
  let x = property_get(person, "x");
  let y = property_get(person, "y");
  let tile = {
    x,
    y,
  };
  let div = g_img_square_div(div_map, tile, "ground_tint");
  html_click_none(div);
  return div;
}

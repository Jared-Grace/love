import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_div } from "./g_img_square_div.mjs";
import { html_click_none } from "./html_click_none.mjs";
export function app_g_hero_ground_div(div_map, person) {
  arguments_assert(arguments, 2);
  ("A blank square laid on the ground where somebody is standing, for a mark that outlives them - a grave, a scorch.");
  ("It lies on the ground layer, under the people, so anybody who walks over it is drawn on top of it; and a tap goes through it to the street underneath, so a mark of what happened can never swallow the tap that walks the player there.");
  ("The PERSON is handed over as the square. A person carries the x and the y a square is named by, and the placing reads nothing else off what it is given, so copying the two out into a fresh pair said the same thing in more words and gave a reader a second object to keep track of.");
  let div = g_img_square_div(div_map, person, "ground_tint");
  html_click_none(div);
  return div;
}

import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { picture_swap_offered } from "./picture_swap_offered.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
export function picture_swap_shown_approved_is(swap) {
  "$plain swap";
  "Whether one of the pictures this place shows on screen is already approved.";
  ("ONLY PICTURES ON SCREEN COUNT, unlike ",
    fn_name("picture_swap_decided_is"),
    ", because this is asked by a page that shows approved places on purpose, to compare a new round against an older approval; there a place approved only through a picture off screen still needs a look, and a place whose shown picture is approved does not.");
  arguments_assert(arguments, 1);
  let chosen = property_get_or(swap, "chosen", []);
  for (let offered of picture_swap_offered(swap)) {
    let item = property_get(offered, "path");
    if (list_includes(chosen, item)) {
      return true;
    }
  }
  return false;
}

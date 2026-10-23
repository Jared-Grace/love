import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clone_over } from "./html_clone_over.mjs";
import { html_style_text_look_copy } from "./html_style_text_look_copy.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_move_duration_distance } from "./html_move_duration_distance.mjs";
import { html_move_animate_rect } from "./html_move_animate_rect.mjs";
import { html_remove } from "./html_remove.mjs";
export async function html_copy_fly_text_rect(component, rect_to, duration) {
  arguments_assert(arguments, 3);
  ("send a copy of some words across to a given place on the screen and let it go once it arrives, the words themselves left where they stand, and the copy looking as they do");
  ("A sibling of ",
    fn_name("html_copy_fly_rect"),
    " for words that take their look from what they stand in, as a piece of a line of code does: the copy hangs off the page, out of that line, and would arrive in the page's own font and colour. Not picked: copying the look in ",
    fn_name("html_copy_fly_rect"),
    " itself, which would change how every chip it already sends is drawn on the way.");
  let clone = html_clone_over(component);
  html_style_text_look_copy(component, clone);
  let rect_from = html_bounding_client_rect(clone);
  ("duration is how long a short flight takes; a longer one is given longer, by ",
    fn_name("html_move_duration_distance"),
    ". 2026-10-23, at the human's asking");
  let paced = html_move_duration_distance(rect_from, rect_to, duration);
  await html_move_animate_rect(clone, rect_from, rect_to, paced);
  ("2026-10-23: let go by a remove that asks nothing of where the copy hangs, because a screen drawn afresh while the copy is crossing has already taken it off the page, and a learner leaving mid-flight was shown an error");
  html_remove(clone);
}

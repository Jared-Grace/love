import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_clone_over } from "./html_clone_over.mjs";
import { html_move_animate_rect } from "./html_move_animate_rect.mjs";
import { html_parent_remove } from "./html_parent_remove.mjs";
export async function html_copy_fly_rect(component, rect_to, duration) {
  arguments_assert(arguments, 3);
  ("send a copy of a thing across to a given place on the screen and let it go once it arrives, leaving the thing itself untouched where it stands");
  ("Given a place rather than another thing to arrive at, because the place it is going is usually where something USED to be - the room a piece of a line was holding before it left - and there is nothing standing there to be pointed at.");
  let clone = html_clone_over(component);
  let rect_from = html_bounding_client_rect(clone);
  await html_move_animate_rect(clone, rect_from, rect_to, duration);
  html_parent_remove(clone);
}

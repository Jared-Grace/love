import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_clone_over } from "./html_clone_over.mjs";
import { html_parent_remove } from "./html_parent_remove.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_transition_move_color_set } from "./html_transition_move_color_set.mjs";
import { html_translation_set } from "./html_translation_set.mjs";
import { sleep } from "./sleep.mjs";
import { subtract } from "./subtract.mjs";
export async function html_copy_fly_rect_changed(
  component,
  rect_to,
  duration,
  change,
) {
  arguments_assert(arguments, 4);
  ("send a copy of a thing across to a given place on the screen, letting it become something else on the way, and let it go once it arrives - the thing itself is left untouched where it stands");
  ("Given a place rather than another thing to arrive at, because the place it is going is usually where something USED to be - the room a piece of a line was holding before it left - and there is nothing standing there to be pointed at.");
  ("The becoming is handed in rather than written here, because the travelling is the same whatever the copy is turning into, and the two are wanted over the same while: a copy that arrives and only then changes is read as two things happening one after the other, when it is one thing.");
  let clone = html_clone_over(component);
  let rect_from = html_bounding_client_rect(clone);
  ("what may be slowed is said before anything is asked of the copy, and the page is made to take it in first, or the copy has only ever been seen where it ends up and it is shown there at once");
  html_transition_move_color_set(clone, duration);
  html_reflow_force(clone);
  change(clone);
  let x = subtract(rect_to.left, rect_from.left);
  let y = subtract(rect_to.top, rect_from.top);
  html_translation_set(clone, x, y);
  await sleep(duration);
  html_parent_remove(clone);
}

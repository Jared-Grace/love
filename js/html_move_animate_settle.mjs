import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_attached_is } from "./html_attached_is.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_transition_transform_set } from "./html_transition_transform_set.mjs";
import { html_translation_set } from "./html_translation_set.mjs";
import { html_translation_transition_clear_multiple } from "./html_translation_transition_clear_multiple.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { not } from "./not.mjs";
import { sleep } from "./sleep.mjs";
import { subtract } from "./subtract.mjs";
export async function html_move_animate_settle(components, change, duration) {
  arguments_assert(arguments, 3);
  ("let a change of shape be watched happening rather than arriving finished: every piece that is still on the page afterwards is held where it was standing, and then let go so it slides to where it now belongs");
  ("Nothing here is told where anything goes. The page works the new shape out by its own rules and this only takes the difference between the two, so the same three lines carry any change at all - a word growing, a piece leaving, a line rewrapping.");
  ("Pieces the change threw away are left out, because a piece that is no longer anywhere has nowhere to slide to and everything measured of it reads as a corner of the screen.");
  ("Held away from their places rather than drawn shifted, because most of what settles here is lettering inside a sentence - a number, a symbol, the space between them - and lettering cannot be drawn shifted at all. Asked to be, it stays exactly where it was and says nothing, so the whole settling reads as the jump it was written to remove.");
  let rects_from = list_map(components, html_bounding_client_rect);
  change();
  function held(component, index) {
    let attached = html_attached_is(component);
    if (not(attached)) {
      return null;
    }
    let rect_from = list_get(rects_from, index);
    let rect_to = html_bounding_client_rect(component);
    let x = subtract(rect_from.left, rect_to.left);
    let y = subtract(rect_from.top, rect_to.top);
    html_offset_set(component, x, y);
    return component;
  }
  let placed = list_map_index(components, held);
  let moved = list_filter_null_not_is(placed);
  ("the page is made to work the held-back shape out BEFORE anything is let go, because a holding and a letting go read in the same breath are no move at all - the page only ever sees the finished answer and shows it at once");
  each(moved, html_reflow_force);
  function released(component) {
    "let this piece take the whole while to come back to where it belongs";
    html_transition_offset_set(component, duration);
    html_offset_set(component, 0, 0);
  }
  each(moved, released);
  await sleep(duration);
  html_offset_transition_clear_multiple(moved);
}

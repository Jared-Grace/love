import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_height_style_clear } from "./html_height_style_clear.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { sleep } from "./sleep.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function html_height_animate(
  component,
  height_from,
  height_to,
  duration,
) {
  arguments_assert(arguments, 4);
  ("take a thing from one height to another over the given time, and hand it its own height back at the end");
  ("Everything standing under it moves with it, because a height is room on the page and the page closes up behind room that is given back. That is the whole reason for changing a height slowly rather than letting it change at once: a learner watching the line they are reading can follow it down, where a jump leaves them looking for it again.");
  ("What overflows is hidden while it moves, because the thing is held shorter than what is inside it for as long as the move lasts, and writing spilling out of the bottom of a shrinking box reads as writing coming loose.");
  html_style_overflow_hidden(component);
  ("the starting height is put on with nothing timing it, so it is taken up at once rather than moved to; the move is the second step, and it can only be a move if the page has already been made to settle at the first");
  html_style_set(component, "transition", "none");
  let style_value = html_pixels_text(height_from);
  html_style_set(component, "height", style_value);
  html_reflow_force(component);
  let timing = text_combine_multiple(["height ", duration, "ms"]);
  html_style_set(component, "transition", timing);
  let style_value2 = html_pixels_text(height_to);
  html_style_set(component, "height", style_value2);
  await sleep(duration);
  html_height_style_clear(component);
}

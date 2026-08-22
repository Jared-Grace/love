import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function g_img_square_style_transition_seconds(tile, seconds) {
  arguments_assert(arguments, 2);
  ("How long this one square takes to slide to where it has been put - its own length,");
  ("rather than the single length every square on the map otherwise shares.");
  ("The shared length is right wherever a slide is only the picture catching up with a");
  ("move that has already happened. It is wrong wherever the sliding IS the movement: a");
  ("person who crosses the tile in a moment and then stands there is stepping, and a");
  ("person whose picture is crossing the tile for the whole time between one step and the");
  ("next is walking. Only a length said per person can tell those two apart.");
  ("It has to be written AFTER the position, for the same reason its sister the delay");
  ("does. Positioning writes the whole transition in one word, and that word sets every");
  ("part of it - including the length - back to the shared default; so a length set first");
  ("is silently erased by the very move it was meant to slow.");
  ("Only the LENGTH is written here and never the whole transition, so a delay standing");
  ("beside it survives. They are two separate properties and each may be said on its own,");
  ("which is what lets a caller stagger a line of people and slow them down at once.");
  let value = text_combine(seconds, "s");
  html_style_assign(tile, {
    transitionDuration: value,
  });
}

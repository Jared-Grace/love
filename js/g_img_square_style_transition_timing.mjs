import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function g_img_square_style_transition_timing(tile, timing) {
  arguments_assert(arguments, 2);
  ("The SHAPE of one square's slide - whether it crosses the tile at an even rate, or");
  ("sets off quickly and settles, or gathers speed and then eases down again.");
  ("The map's own shape is right for a picture catching up with a move that already");
  ("happened, where all that is wanted is for the jump not to be a jump. It is wrong for a");
  ("person walking, because a person walking does not travel at one rate: a step pushes");
  ("off, carries, and lands. A slide that crosses the tile evenly is a piece sliding on a");
  ("board, and it reads that way however long it is given.");
  ("Written AFTER the position, the same as the length and the delay beside it, and for");
  ("the same reason: positioning writes the whole transition in one word and sets every");
  ("part of it back to the shared default, so a shape set first is erased by the very move");
  ("it was meant to shape.");
  ("Only the shape is written and never the whole transition, so a length and a delay");
  ("already standing beside it survive.");
  html_style_assign(tile, {
    transitionTimingFunction: timing,
  });
}

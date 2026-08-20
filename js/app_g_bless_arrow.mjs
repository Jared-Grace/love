import { app_shared_arrow_svg } from "./app_shared_arrow_svg.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_arrow(direction) {
  arguments_assert(arguments, 1);
  ("The arrow that shows a facing, for a button that turns the player that way.");
  ("An arrow rather than the word, because these four buttons sit along the bottom of the");
  ("screen where a word would either be too small to read or too wide to fit four of. An");
  ("arrow is read at a glance and in any language.");
  ("A DRAWN arrow, and the one the code lessons already draw, turned four ways. Not the");
  ("emoji arrow, which the phone draws as a white glyph on a coloured square of its own");
  ("choosing - four of those sitting on green buttons are four stickers stuck over the");
  ("buttons, and the button's colour is how this game says a thing may be pressed. Not the");
  ("typed arrow either: it is a letter, so it is as thin as the surrounding text, sits low");
  ("in its line box, and is a different shape on every phone.");
  ("The drawing takes the button's own letter colour, because it fills with currentColor -");
  ("so it behaves like the text it replaces while looking like a control.");
  ("Down is south, because the grid's y grows the way the rows are drawn - the same");
  ("agreement ",
    fn_name("g_direction_step"),
    " is written to. The turns follow from that:");
  ("the drawing points right to begin with, so east is no turn at all.");
  if (equal(direction, "north")) {
    let up = app_shared_arrow_svg(270);
    return up;
  }
  if (equal(direction, "south")) {
    let down = app_shared_arrow_svg(90);
    return down;
  }
  if (equal(direction, "east")) {
    let right = app_shared_arrow_svg(0);
    return right;
  }
  let left = app_shared_arrow_svg(180);
  return left;
}
